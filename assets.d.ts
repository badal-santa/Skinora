// Image assets resolved by Metro — `require("./x.png")` returns an image source.
declare module "*.png" {
  const source: import("react-native").ImageSourcePropType;
  export = source;
}
declare module "*.jpg" {
  const source: import("react-native").ImageSourcePropType;
  export = source;
}

// Audio assets — `require("./x.mp3")` returns a module id for expo-audio.
declare module "*.mp3" {
  const source: number;
  export = source;
}
declare module "*.wav" {
  const source: number;
  export = source;
}
declare module "*.m4a" {
  const source: number;
  export = source;
}
