# Skinora App — Documentation

Skinora is an Expo / React Native app for Android (an iOS config exists in
`app.json`, but this guide covers Android). Users browse outfits, characters,
emotes and accessories, reveal outfit IDs, use Robux and Premium-plan
calculators, open games and play sounds.

- **Project folder:** `~/Desktop/Santa/GameVerse`
- **App name / package:** Skinora / `com.santabrowser.skinora`
- **Version:** 1.0.0, versionCode 1
- **Backend (ads + Custom Tab):** `../skinora-backend` — https://skinora-ads.fitpilot-api.workers.dev
- **Dashboard:** `../skinora-admin` — https://skinora-admin.fitpilot-api.workers.dev

Ads and the Custom Tab come from the backend. Games and calculator rates come
from Firebase Remote Config.

---

## Contents

1. [Tech stack](#1-tech-stack)
2. [How it fits together](#2-how-it-fits-together)
3. [Screens and navigation](#3-screens-and-navigation)
4. [Translations](#4-translations)
5. [Ads system](#5-ads-system)
6. [Chrome Custom Tab](#6-chrome-custom-tab)
7. [Firebase Remote Config](#7-firebase-remote-config)
8. [Local development](#8-local-development)
9. [Release APK](#9-release-apk)
10. [Project structure](#10-project-structure)
11. [Common tasks](#11-common-tasks)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Tech stack

| Part | Used | Notes |
|---|---|---|
| Framework | Expo SDK 57 (`expo ~57.0.25`) | React Native 0.86.3, React 19.2.3, TypeScript ~6.0 |
| Native architecture | New Architecture + Hermes | `newArchEnabled=true`, `hermesEnabled=true` in `android/gradle.properties` |
| Navigation | React Navigation 7, native stack | `@react-navigation/native-stack`. The app does **not** use Expo Router, even though `AGENTS.md` mentions it. All routes are in `src/navigation/Navigator.tsx`. |
| Styling | NativeWind 4 + Tailwind CSS 3 | `className` on RN components. Colors from `src/theme/colors.ts`, wired in `tailwind.config.js`. |
| Font | Poppins 400–900 | Embedded by the `expo-font` plugin in `app.json`, one family `Poppins` |
| Animation | react-native-reanimated 4 + react-native-worklets | Splash, header ad pulse, detail screens |
| Icons | lucide-react-native | |
| Storage | AsyncStorage | Chosen language, cached ads config |
| Remote settings | `@react-native-firebase/remote-config` | Games list, calculator rates |
| Ads + Custom Tab | `skinora-backend` over HTTP + WebSocket | `src/ads/ads.ts` |
| Custom Tab | `expo-web-browser` | `src/customTab/customTab.ts` |
| Other Expo modules | `expo-audio`, `expo-media-library`, `expo-clipboard`, `expo-file-system`, `expo-asset`, `expo-linear-gradient`, `expo-splash-screen`, `expo-dev-client` | |

---

## 2. How it fits together

```
 Admin (browser)                         Skinora app (phone)
       │                                        │
       ▼                                        │  GET /api/ads
 skinora-admin ──────────▶ skinora-backend ◀────┤  WebSocket /api/ads/live
 (dashboard)               (Cloudflare Worker)  │
                                                │
 Firebase console ───────▶ Remote Config ◀──────┘  games_list, calc_*
```

At launch `App.tsx` calls `initRemoteConfig()` and `initAds()`, and keeps the
native splash up until the navigator is ready.

---

## 3. Screens and navigation

All screens are in one native stack (`src/navigation/Navigator.tsx`), with the
header hidden. The first route is `Splash`. Route params are typed in
`src/navigation/types.ts`.

### Routes

| Route | Screen file | Params | What it shows |
|---|---|---|---|
| `Splash` | `SplashScreen.tsx` | — | Animated logo and progress bar (about 3.5 s) |
| `Language` | `LanguageScreen.tsx` | `{ fromSettings?: boolean }` | Language picker (17 languages) |
| `Home` | `HomeScreen.tsx` | — | Featured carousel, category cards, tool tiles |
| `Outfits` | `OutfitCategoriesScreen.tsx` | — | Outfit groups: tops, jackets, pants, hats, hair, accessories |
| `OutfitCollection` | `OutfitCollectionScreen.tsx` | `{ category }` | Items of one group, with filters |
| `OutfitLetsGo` | `OutfitLetsGoScreen.tsx` | `{ outfitId }` | Big item image and a "Let's Go" button |
| `OutfitPreview` | `OutfitPreviewScreen.tsx` | `{ outfitId }` | Item view with share, download and **Get ID** |
| `OutfitScratch` | `OutfitScratchScreen.tsx` | `{ outfitId }` | Scratch card that reveals the item ID; copy button |
| `Characters` | `AllCharactersScreen.tsx` | — | Character grid |
| `CharacterDetails` | `CharacterDetailsScreen.tsx` | `{ characterId }` | Item view with share and download |
| `Emotes` | `AllEmotesScreen.tsx` | — | Emote grid |
| `EmoteDetails` | `EmoteDetailsScreen.tsx` | `{ emoteId }` | Item view with share and download |
| `Accessories` | `AllAccessoriesScreen.tsx` | — | Caps and shoes |
| `AccessoryDetails` | `AccessoryDetailsScreen.tsx` | `{ accessoryId }` | Item view with share and download |
| `CalculatorHub` | `CalculatorHubScreen.tsx` | — | "All Calculator": 6 plan converters + Robux ⇄ USD tile |
| `Calculator` | `CalculatorScreen.tsx` | — | Robux → USD, USD → Robux, marketplace fee |
| `TierCalculator` | `TierCalculatorScreen.tsx` | `{ from, to }` | Premium plan converter (Basic / Pro / Elite) |
| `Games` | `GamesScreen.tsx` | — | Games from Remote Config; tap opens a Custom Tab |
| `Sounds` | `SoundsScreen.tsx` | — | Sound player; save a sound to the device |
| `Settings` | `SettingsScreen.tsx` | — | Share app, language, rate app, version, privacy policy |
| `Explore` | `ExploreScreen.tsx` | — | Placeholder text only |

`Explore` and `Accessories` are registered, but no screen in the code
navigates to them.

### Flow

```
Splash ──(no saved language)──▶ Language ──▶ [launch Custom Tab] ──▶ Home
   └────(language saved)──────▶ [launch Custom Tab] ─────────────────▶ Home

Home ├─ carousel / category cards ─▶ Outfits | Characters | Emotes
     ├─ tool tiles ───────────────▶ Games | CalculatorHub | Sounds
     └─ settings icon ────────────▶ Settings ─▶ Language { fromSettings: true }

Outfits ─▶ OutfitCollection ─▶ OutfitLetsGo ─▶ OutfitPreview ─▶ OutfitScratch
            (Categories)        (Collection)    (Let's Go)       (Get ID)   (Scratch & Get ID)

Characters ─▶ CharacterDetails
Emotes     ─▶ EmoteDetails
Accessories ─▶ AccessoryDetails

CalculatorHub ├─ BP / PB / BE / EB / PE / EP tiles ─▶ TierCalculator { from, to }
              └─ R$ tile ───────────────────────────▶ Calculator
```

Notes:

- **First launch.** The splash reads the saved language
  (`loadLanguage()`). If there is none, it replaces itself with `Language`.
  The picker pre-selects the device language. Confirming saves it and goes
  to `Home` (through the launch Custom Tab, see §6). Opened from Settings,
  the picker just goes back.
- **Forward taps** that open a new section or item go through
  `withCustomTab()` (Home, Outfits flow, Characters, Emotes, Accessories,
  CalculatorHub). `Settings` and the Language row in Settings do not.
- **Outfit IDs.** Each item in `src/data/data.js` has an `itemId`. The Scratch
  screen shows it after scratching, with a copy button. An empty `itemId`
  shows "ID coming soon".
- **Downloads.** The detail screens (`DownloadableDetails`) save the bundled
  image to the photo library with `expo-media-library`. The Sounds screen
  saves sounds the same way. `src/utils/assetFile.ts` turns a bundled asset
  into a `file://` path (needed in Android release builds).
- **Content** (categories, items, characters, emotes, sounds, carousel) is
  static, in `src/data/data.js`. Images are under `assets/images/`, sounds
  under `assets/sounds/`.
- **Settings.** `PRIVACY_POLICY_URL` and `IOS_APP_STORE_ID` in
  `src/config/app.ts` are empty, so "Privacy policy" shows a "coming soon"
  alert. "Rate app" opens `market://details?id=com.santabrowser.skinora`.

---

## 4. Translations

The app has **17 languages**: English, Hindi, Spanish, Portuguese, French,
German, Italian, Russian, Arabic, Turkish, Indonesian, Filipino, Vietnamese,
Thai, Japanese, Korean, Chinese.

| File | Purpose |
|---|---|
| `src/i18n/languages.ts` | The list shown on the Language screen (code, native name, English name, flag); `deviceLanguage()` picks the best match for the phone's locale (`tl` is mapped to `fil`) |
| `src/i18n/translations/en.ts` | English strings — the source of truth. Exports the `Strings` type (`typeof en`). |
| `src/i18n/translations/<code>.ts` | One file per language, typed as `Strings` |
| `src/i18n/translations/index.ts` | Maps language code → strings |
| `src/i18n/language.ts` | Saves the choice in AsyncStorage (`app.language`); `useT()` returns the strings, `label(t, value)` translates data values like tags ("HOT") and styles ("Casual") |

In a component:

```tsx
const t = useT();
<Text>{t.settings.title}</Text>
```

Item names (outfits, characters, emotes) are product names and are not
translated. Category copy is in `t.categories[<category id>]`.

**Add a string:** add it to `en.ts`, then to every other language file.
TypeScript fails (`npx tsc --noEmit`) until all files have it.

**Add a language:**

1. Create `src/i18n/translations/<code>.ts` exporting a `Strings` object
   (copy `en.ts` and translate).
2. Import and add it in `translations/index.ts`.
3. Add an entry to `languages` in `languages.ts`. The `code` must match the
   key in `translations`.

---

## 5. Ads system

The app shows its own ("house") ads. Nothing is hard-coded: creatives, which
slots are on, and where cards sit on a screen all come from the backend and
are managed in the dashboard.

### 5.1 Where ads come from

- Backend: `skinora-backend`, Worker `skinora-ads`.
- Base URL: `EXPO_PUBLIC_ADS_API_URL`, or by default
  `https://skinora-ads.fitpilot-api.workers.dev` (`src/ads/ads.ts`).
- The app calls `GET /api/ads` and keeps a WebSocket to `/api/ads/live`. The
  response format is in `../skinora-backend/DOCUMENTATION.md` §4.
- The app drops malformed entries. Creative links and images must be
  `https://`; a creative without `id`, `title` or an https `url` is ignored.

### 5.2 Placements

A **placement** is one ad slot on one screen. Its id is:

```
<RouteName>.<slot>        e.g. Home.card, Calculator.header, CalculatorHub.banner
```

`RouteName` is the navigator route name, read with `useRoute()` inside the
component — so the same component gets a different placement on each screen.
The backend's `placements` table must use the same ids.

| Slot | Component | Look |
|---|---|---|
| `header` | `<HeaderAd />` | Small round logo with a red "AD" badge, gently pulsing, top-right of the header |
| `card` | `<PromoAdCard />` | Card: logo, title, subtitle, "AD" badge, banner image, full-width button |
| `card` (compact) | `<PromoAdCard compact />` | Same card without the banner image |
| `banner` | `<PromoAdCard variant="banner" />` | Slim full-width strip: logo, title, subtitle, small button |
| `side` | `<PromoAdCard variant="side" />` | Image on the left, text and button on the right |

Both components render **nothing** when there is no ad, so the spacing
(`style` prop) disappears too. Tapping an ad opens its link with
`openInCustomTab()`. The button text is the creative's `cta`, or the
translated default (`t.promo.cta`).

Where `HeaderAd` appears: every screen using `ScreenHeader`, the detail
screens (`DownloadableDetails`, also used by `OutfitPreview`) and
`OutfitLetsGo`. It is commented out in `HomeHeader`, so Home has no header ad.

### 5.3 Which creative shows

`usePlacementAds(id)` returns the creatives for a placement:

- empty if the master switch (`adsEnabled`) is off, or the placement is off;
- the placement's `creativeIds` if set, otherwise all active creatives;
- a placement the backend doesn't know yet counts as **on, with all
  creatives**.

`HeaderAd` and `PromoAdCard` without `at` pick one creative at random when
they mount and keep it while the screen is open.

### 5.4 Positions (several spots for one card)

Most screens render more than one `<PromoAdCard at="…" />` for the same
`card` placement. Each `at` is a **spot** on the screen. The dashboard decides
which spots are used; the app gets them as `placements[id].positions`.

- If the dashboard chose spots, only those render. A spot not in the list
  renders nothing.
- If `positions` is missing, only the spot marked `isDefault` renders.
  Each screen has exactly one default.
- When several spots are chosen, **each shows a different creative**. All
  spots on one screen visit share a random starting index (keyed by the
  route key and placement id); spot *n* shows creative `(start + n) % count`.
  A new visit to the screen starts somewhere new.
- Spots beyond the number of creatives stay **empty** — an ad is never shown
  twice on the same screen.

Spot ids must match the `positions` the backend has for that placement
(`migrations/0007_placement_positions.sql` in the backend).

### 5.5 Ad spots per screen

Default spot in **bold**.

| Placement | Spots (`at`) | Defined in |
|---|---|---|
| `Home.card` | `top`, `afterSlider`, **`afterCategories`**, `bottom` | `HomeScreen.tsx` |
| `Language.card` | `top`, **`bottom`** | `LanguageScreen.tsx` |
| `Settings.card` | `top`, **`afterRows`** | `SettingsScreen.tsx` |
| `Outfits.card` | `top`, **`after3`**, `bottom` | `OutfitCategoriesScreen.tsx` |
| `OutfitCollection.card` | `top`, **`afterFilters`**, `bottom` | `ItemCatalog.tsx` |
| `Characters.card` | `top`, **`afterRow2`**, `bottom` | `AllCharactersScreen.tsx` |
| `Emotes.card` | `top`, **`afterRow2`**, `bottom` | `AllEmotesScreen.tsx` |
| `Accessories.card` | `top`, **`after3`**, `bottom` | `AllAccessoriesScreen.tsx` |
| `Calculator.card` | `top`, **`aboveDisclaimer`**, `bottom` | `CalculatorScreen.tsx` |
| `TierCalculator.card` | `top`, **`afterResults`**, `bottom` | `TierCalculatorScreen.tsx` |
| `Games.card` | `top`, **`afterFeatured`**, `bottom` | `GamesScreen.tsx` |
| `Sounds.card` | `top`, **`afterPlayer`**, `bottom` | `SoundsScreen.tsx` |

Fixed spots (no `at`, always shown when the placement has ads):

| Placement | Component | Defined in |
|---|---|---|
| `OutfitLetsGo.card` | compact card above the button | `OutfitLetsGoScreen.tsx` |
| `OutfitScratch.card` | compact card | `OutfitScratchScreen.tsx` |
| `OutfitPreview.card`, `CharacterDetails.card`, `EmoteDetails.card`, `AccessoryDetails.card` | compact card in the bottom bar | `DownloadableDetails.tsx` |
| `CalculatorHub.banner` | banner under the header | `CalculatorHubScreen.tsx` |
| `CalculatorHub.side` | side card after the 2nd row of tiles | `CalculatorTileGrid.tsx` |
| `<Route>.header` | `HeaderAd` | see §5.2 |

### 5.6 Loading and live updates

All in `src/ads/ads.ts`, started by `initAds()` from `App.tsx`:

1. **Cache.** Load the last config from AsyncStorage (`ads.config.v1`) and
   show it at once.
2. **Fetch.** `GET /api/ads` with `cache: "no-store"`, 8 s timeout. On
   success the config is published to all screens and saved to the cache.
   On failure the cached config stays.
3. **Foreground.** Every time the app returns to the foreground it refetches
   (changes may have happened while away).
4. **Live socket.** While in the foreground the app keeps a WebSocket to
   `/api/ads/live` (`http` → `ws`, `https` → `wss`):
   - message `changed` → refetch at once;
   - sends `ping` every 30 s (Cloudflare drops idle sockets after about
     100 s);
   - on drop, reconnects after 1 s, doubling up to 30 s; after a reconnect
     it refetches to catch up;
   - closed when the app goes to the background.
5. **Fallback poll.** Refetch every 5 minutes while in the foreground, in
   case the socket is down.
6. **Newest request wins.** Each fetch gets a number; a response is used only
   if no newer fetch has started since. A slow old response can't overwrite
   a newer one.

Screens use `useSyncExternalStore`, so they re-render as soon as a new config
arrives.

**`waitForAds(timeoutMs)`** resolves when the launch fetch finishes (or
fails), or after the timeout. The splash calls `waitForAds(2000)` before the
launch Custom Tab, so a slow first fetch still gets fresh Custom Tab settings.

---

## 6. Chrome Custom Tab

The app can open a website in a Chrome Custom Tab (SFSafariViewController on
iOS) **between screens**: on launch, on taps, and on back. The settings come
from the same backend response as the ads (`customTab`), managed in the
dashboard. Code: `src/customTab/customTab.ts`, using `expo-web-browser`.

### 6.1 Settings

| Field (backend) | In the app | Meaning |
|---|---|---|
| `enabled` | `enabled` | Master switch. Forced off if there are no valid `https://` urls. |
| `urls` | `urls` | Sites to rotate through (duplicates and non-https removed) |
| `onLaunch` | `onLaunch` | Open once between splash (or first-launch Language) and Home |
| `onTap` | `onTap` | Open on forward taps. Missing = on (older configs). |
| `onBack` | `onBack` | Open on back actions |
| `everyClicks` | `everyClicks` | Open on every Nth counted tap/back (min 1) |
| `minGapSeconds` | `minGapMs` | Minimum time between two openings (0 = no limit) |

Until the first config arrives (no cache, no network), the Custom Tab is
**off**.

### 6.2 Functions

| Function | Used by | Behavior |
|---|---|---|
| `withCustomTab(action, trigger)` | Forward taps (`"tap"`), the navigator's back handler (`"back"`) | If the tab should open, opens it, waits for the user to come back, then runs `action`. Otherwise runs `action` at once. |
| `withLaunchCustomTab(action)` | `SplashScreen`, `LanguageScreen` (first launch) | Opens the tab once if `enabled` and `onLaunch`, then runs `action` (go to Home). Does not count as a click. |
| `openInCustomTab(url)` | Ads, Games | Opens a specific link. No counting, no rules. |

**When a tap or back opens the tab** (`shouldOpen`):

1. `enabled` is on and there is at least one url.
2. The trigger's switch (`onTap` or `onBack`) is on. Switched-off triggers
   don't count.
3. The click counter goes up by one. Taps and backs share one counter.
4. It opens only if `counter % everyClicks === 0` **and** at least
   `minGapSeconds` passed since the last opening.

**Other details:**

- **Busy guard.** While a tab is opening or open, further taps are ignored.
- **Waiting for return (Android).** `openBrowserAsync` returns as soon as the
  tab opens, so the app watches `AppState`: leaving the foreground and coming
  back means the user closed the tab. If the app never leaves the foreground
  within 3 s, it assumes the tab didn't show and continues.
- **URL rotation.** The next url is chosen in advance, at random, never the
  same as the previous one (when there are 2+ urls).
- **Warm-up (Android).** The chosen url is pre-loaded with `warmUpAsync()` +
  `mayInitWithUrlAsync()`, so the tab opens already loading. A new config
  picks and warms a new url.
- **Tab options.** Toolbar in the app's background color, title shown, and
  `createTask: false` — the tab opens inside the app's task, so Back returns
  straight to the app.

### 6.3 Back press

`Navigator.tsx` adds a `beforeRemove` listener to every screen
(`screenListeners`). For `GO_BACK` and `POP` actions — the system back
button, the back gesture and in-app back buttons — it:

1. does nothing if the Custom Tab or `onBack` is off (normal back);
2. otherwise prevents the back, calls `withCustomTab(…, "back")`, and
   re-dispatches the same back action after the tab is closed (a flag stops
   the listener from catching it again).

Forward navigation (`navigate`, `replace`) is not affected. `app.json` sets
`predictiveBackGestureEnabled: false` for Android.

---

## 7. Firebase Remote Config

Only these keys remain in Remote Config (`src/config/remoteConfig.ts`). Ads
and the Custom Tab moved to the backend; the old `promo_ads` and
`custom_tab_*` keys are gone.

| Key | Type | Default | Used by |
|---|---|---|---|
| `calc_robux_per_usd` | number | `80` | Calculator: Robux per 1 USD |
| `calc_devex_usd_per_robux` | number | `0.0038` | Calculator: USD per Robux when cashing out (DevEx) |
| `calc_creator_share_percent` | number | `70` | Calculator: % of a sale the creator keeps (max 100) |
| `calc_premium_tiers` | JSON | `{ basic: {robux: 450, usd: 4.99}, pro: {1000, 9.99}, elite: {2200, 19.99} }` | Calculator hub / TierCalculator |
| `games_list` | JSON | `[]` | Games screen |

`games_list` is an array of `{ id, title, url, image?, category?, featured? }`.
Entries without a title or an `http(s)` url are dropped. The first entry with
`featured: true` (or the first entry) is the big card. Categories become
filter chips.

Invalid values fall back to the defaults per key (numbers must be > 0).

**How the app reads it:**

- Defaults apply until the first fetch succeeds, and always when Firebase is
  unavailable.
- At launch: show cached values, then `fetchAndActivate`.
- Minimum fetch interval: 0 in development, 1 hour in release. Fetch
  timeout: 10 s.
- Real-time updates (`onConfigUpdate`) activate changes while the app is
  open.
- Screens use `useCalculatorRates()` and `useGames()`.

**Template files.** `firebase/remote-config-template.json` and
`remote-config-template.json` (repo root) are the same file: every key with
its type, a default value and a description. `games_list` holds example
entries — replace them with real games. No publish script is in this repo;
set or import the values in the Firebase console (Remote Config) and publish
there.

The Firebase project config is in `google-services.json` (Android) and
`GoogleService-Info.plist` (iOS), referenced from `app.json`.

---

## 8. Local development

### Why a development build

The app uses native modules that Expo Go does not include —
`@react-native-firebase/app`, `@react-native-firebase/remote-config` — and
`expo-dev-client`. Build and install a development build with
`npx expo run:android` (which `npm run android:local` does).

`android/` is generated by Expo (it is in `.gitignore`). Configure native
settings in `app.json` and config plugins, not by editing `android/`.

### Scripts

| Command | What it does |
|---|---|
| `npm run android:local` | `adb:reverse`, then `expo run:android` (build, install, start Metro) |
| `npm run adb:reverse` | `adb reverse tcp:8081 tcp:8081` (Metro) and `tcp:8787 tcp:8787` (local backend) |
| `npm start` | `expo start` — Metro only, for an installed dev build |
| `npm run lint` | `expo lint` |
| `npx tsc --noEmit` | Type check |

`adb reverse` makes `localhost:8081` and `localhost:8787` on the phone reach
your computer. It is lost when the phone disconnects — run
`npm run adb:reverse` again.

### Ads backend URL

`.env.development.local`:

```
EXPO_PUBLIC_ADS_API_URL=http://localhost:8787
```

Expo inlines `EXPO_PUBLIC_*` variables into the bundle. This file is loaded
only for development (`NODE_ENV=development`), so dev builds talk to the
local backend. Release builds are bundled with `NODE_ENV=production`, don't
read it, and use the live URL. Delete or comment out the line to use the live
backend from a dev build. Restart Metro after changing it.

### Running the backend and dashboard locally

```bash
# Terminal 1 — backend (first time: see ../skinora-backend/README.md)
cd ../skinora-backend
npm run dev                      # http://localhost:8787

# Terminal 2 — dashboard
cd ../skinora-admin
npm run dev                      # http://localhost:3000

# Terminal 3 — app
cd ../GameVerse
npm run android:local
```

The local backend has its own database, separate from the live one. If you
restart the backend, restart the dashboard's `npm run dev` too.

### Metro and CI=1

Do **not** start Metro with `CI=1`. It turns off file watching, so edits
don't reach the phone and you keep seeing old code.

### Before finishing a change

```bash
npm run lint
npx tsc --noEmit
```

---

## 9. Release APK

| Setting | Value | Where |
|---|---|---|
| Version | `1.0.0` | `app.json`, `android/app/build.gradle` (`versionName`) |
| versionCode | `1` | `android/app/build.gradle` |
| Min Android | API 24 (Android 7.0) | Expo default (`minSdk` 24); target SDK 36 |
| CPU ABIs | `armeabi-v7a`, `arm64-v8a`, `x86`, `x86_64` | `reactNativeArchitectures` in `android/gradle.properties` |
| Signing | Debug keystore (`android/app/debug.keystore`) | `buildTypes.release` in `android/app/build.gradle` |

The release build is currently signed with the **debug keystore**. Google Play
needs a real upload key before publishing.

### Build

`./gradlew clean` fails on this project. Delete the build folders instead:

```bash
cd ~/Desktop/Santa/GameVerse
rm -rf android/app/build android/app/.cxx android/build android/.gradle

cd android
NODE_ENV=production ./gradlew assembleRelease \
  -Dorg.gradle.jvmargs="-Xmx4096m -XX:MaxMetaspaceSize=1024m"
```

- `NODE_ENV=production` makes the JS bundle skip `.env.development.local`, so
  the APK uses the live backend.
- The `jvmargs` raise Gradle's memory (the default in `gradle.properties` is
  `-Xmx2048m`); without them the build can run out of memory.

Output:

```
android/app/build/outputs/apk/release/app-release.apk
```

Copy it for sharing (`build-output/` is git-ignored):

```bash
cp android/app/build/outputs/apk/release/app-release.apk build-output/Skinora-1.0.0-release.apk
```

### Install

```bash
adb install build-output/Skinora-1.0.0-release.apk
```

If the phone already has a dev build and the install fails with a signature
error (`INSTALL_FAILED_UPDATE_INCOMPATIBLE`), uninstall it first:

```bash
adb uninstall com.santabrowser.skinora
```

---

## 10. Project structure

```
GameVerse/
├── App.tsx                  Root: native splash, NavigationContainer, initRemoteConfig + initAds
├── index.ts                 Registers App
├── app.json                 Expo config: name, package, icons, splash, plugins
├── global.css               Tailwind entry for NativeWind
├── tailwind.config.js       Theme colors + Poppins
├── metro.config.js          Metro + NativeWind
├── babel.config.js          babel-preset-expo + NativeWind
├── .env.development.local   Local ads backend URL (dev builds only)
├── google-services.json     Firebase config (Android) — do not share
├── remote-config-template.json, firebase/remote-config-template.json
│                            Remote Config keys (identical copies)
├── assets/                  Icons, splash image, images/, sounds/
├── android/                 Generated native project (git-ignored)
├── build-output/            Release APKs (git-ignored)
└── src/
    ├── ads/ads.ts           Ads + Custom Tab config: fetch, cache, live socket, hooks
    ├── customTab/customTab.ts  Custom Tab rules and opening
    ├── config/
    │   ├── remoteConfig.ts  Firebase Remote Config: games, calculator rates
    │   └── app.ts           App name, version, store links, privacy URL
    ├── navigation/
    │   ├── Navigator.tsx    Stack routes + back-press Custom Tab
    │   └── types.ts         Route params
    ├── screens/             One file per route (§3)
    ├── components/          Shared UI: PromoAdCard, HeaderAd, ScreenHeader,
    │   │                    ItemCatalog, DownloadableDetails, ScratchCard, cards …
    │   └── calculator/      Calculator UI, tiles and math
    ├── data/data.js         Static content: categories, items, characters, emotes, sounds
    ├── i18n/                Languages, translations, useT()
    ├── theme/               colors.ts, fonts.ts
    └── utils/assetFile.ts   Bundled asset → file:// path (for saving)
```

---

## 11. Common tasks

### Add an ad spot to a screen

1. Place `<PromoAdCard at="newSpot" style={…} />` (or `<HeaderAd />`) on the
   screen. Keep exactly one `isDefault` spot per screen.
2. In the backend, add the spot to the placement's `positions` (or add a new
   placement row with id `<RouteName>.<slot>`) with a migration — see
   `../skinora-backend/DOCUMENTATION.md` §9.
3. Choose the spot in the dashboard.

### Add a screen

1. Create `src/screens/NewScreen.tsx`.
2. Add the route to `RootStackParamList` in `src/navigation/types.ts` and a
   `<Stack.Screen>` in `Navigator.tsx`.
3. Navigate to it, through `withCustomTab()` if taps there should count for
   the Custom Tab.
4. For ads, add placements in the backend using the route name.

### Add content (items, characters, emotes, sounds)

Add the asset under `assets/` and an entry in `src/data/data.js`. For outfits,
set `itemId` to show a real ID on the Scratch screen. Items with type `Cap`
or `Shoes` also appear in `Accessories`.

### Change calculator rates or games

Change them in the Firebase console (§7). No app update needed.

---

## 12. Troubleshooting

| Problem | Cause / fix |
|---|---|
| Ads don't show in a dev build | The phone can't reach the local backend. Run `npm run adb:reverse` (port 8787 must be reversed) and check `npm run dev` is running in `../skinora-backend`. Until it can connect, the app shows the **cached** ads (or none). Look for `[ads] refresh failed` in the Metro log. |
| App shows old ads | The fetch failed, so the cached config is used. Check the backend URL and network. Bring the app to the foreground again to refetch. In a dev build, check `.env.development.local` points where you expect, and restart Metro after changing it. |
| Ad doesn't show in a slot | Master switch on, placement on, creative active and selected (or "all ads"), and the spot (`at`) chosen in the dashboard. With several spots chosen and fewer creatives, the extra spots stay empty. |
| Code changes don't reach the phone | Metro was started with `CI=1` (no file watching). Restart it without `CI`. |
| Release build runs out of memory | Pass `-Dorg.gradle.jvmargs="-Xmx4096m -XX:MaxMetaspaceSize=1024m"` (§9). |
| `./gradlew clean` fails | Expected. Delete `android/app/build`, `android/app/.cxx`, `android/build`, `android/.gradle` instead. |
| Release APK won't install over the dev build | Signature mismatch. `adb uninstall com.santabrowser.skinora`, then install. |
| Release APK talks to the local backend | It was built without `NODE_ENV=production`. Rebuild with it. |
| YouTube link in the Custom Tab opens the YouTube app | Android hands YouTube links to the installed YouTube app instead of showing them in the tab. This is device behavior, not app code. Use a non-YouTube link if it must stay in the tab. |
| Custom Tab never opens | Check in the dashboard: enabled, at least one url, the trigger switch (`onLaunch` / `onTap` / `onBack`), `everyClicks` and `minGapSeconds`. Before the first config arrives the tab is off. |
| Games list empty / calculator uses defaults | Remote Config not fetched (no network) or invalid JSON — see `[remote-config]` warnings in the log. In release, fetches happen at most once per hour (real-time updates still apply). |
