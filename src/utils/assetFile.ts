import { Asset } from "expo-asset";

/**
 * Returns a `file://` path for a bundled image (`require("./x.png")`),
 * e.g. to save it to the photo library.
 *
 * In Android release builds, expo-asset reports images as "downloaded" with a
 * drawable resource name (like `assets_images_home_neon`) instead of a file —
 * fine for <Image>, but not a path other APIs can read. In that case we make an
 * un-hashed copy of the asset so expo-asset writes the resource to the cache.
 */
export async function getAssetFileUri(moduleId: number): Promise<string> {
  const asset = Asset.fromModule(moduleId);
  await asset.downloadAsync();

  const uri = asset.localUri ?? asset.uri;
  if (uri.startsWith("file://")) return uri;

  const copy = new Asset({
    name: asset.name,
    type: asset.type,
    hash: null,
    uri,
  });
  await copy.downloadAsync();
  if (!copy.localUri?.startsWith("file://")) {
    throw new Error(`Couldn't get a local file for asset: ${uri}`);
  }
  return copy.localUri;
}
