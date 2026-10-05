# Skinora

Skinora is an Android app for browsing outfits, characters, emotes and
accessories, with a Robux calculator, a games list and a sound board. Ads and
the Chrome Custom Tab are controlled from an admin dashboard.

- **Package:** `com.santabrowser.skinora`
- **Version:** 1.0.0 (versionCode 1)
- **Full guide:** [DOCUMENTATION.md](DOCUMENTATION.md)

## Tech stack

| Part | Used |
|---|---|
| Framework | Expo SDK 57, React Native 0.86, React 19, TypeScript |
| Navigation | React Navigation 7 (native stack) — not Expo Router |
| Styling | NativeWind 4 (Tailwind CSS 3), Poppins font |
| Animation | react-native-reanimated 4 |
| Remote settings | Firebase Remote Config (games list, calculator rates) |
| Ads + Custom Tab | `skinora-backend` (Cloudflare Worker), managed in `skinora-admin` |

## Related projects

| Project | Folder | Purpose |
|---|---|---|
| Backend | `../skinora-backend` | Serves ads and Custom Tab settings — https://skinora-ads.fitpilot-api.workers.dev |
| Dashboard | `../skinora-admin` | Admin UI for ads and the Custom Tab — https://skinora-admin.fitpilot-api.workers.dev |

## Quick start (local development)

The app uses native modules (Firebase, `expo-dev-client`), so it needs a
**development build**. Expo Go is not enough.

```bash
npm install
npm run android:local     # adb reverse 8081 + 8787, then build and run the dev build
```

`npm run android:local` runs `npm run adb:reverse` first, so the phone can
reach Metro (port 8081) and the local backend (port 8787). If you reconnect
the phone, run `npm run adb:reverse` again.

To test ads against a local backend, start it in another terminal:

```bash
cd ../skinora-backend && npm run dev        # http://localhost:8787
cd ../skinora-admin   && npm run dev        # http://localhost:3000 (dashboard)
```

`.env.development.local` points dev builds at `http://localhost:8787`. Release
builds ignore it and use the live backend.

Do not start Metro with `CI=1` — it turns off file watching and you will see
old code.

Before you finish a change:

```bash
npm run lint
npx tsc --noEmit
```

## Build a release APK

`./gradlew clean` fails on this project, so delete the build folders by hand:

```bash
rm -rf android/app/build android/app/.cxx android/build android/.gradle
cd android
NODE_ENV=production ./gradlew assembleRelease -Dorg.gradle.jvmargs="-Xmx4096m -XX:MaxMetaspaceSize=1024m"
```

Output: `android/app/build/outputs/apk/release/app-release.apk`. Copy it to
`build-output/Skinora-1.0.0-release.apk`.

If installing fails with a signature error, uninstall the existing app from
the phone first (`adb uninstall com.santabrowser.skinora`).

See [DOCUMENTATION.md](DOCUMENTATION.md) for screens, the ads system, the
Custom Tab, Remote Config and troubleshooting.
