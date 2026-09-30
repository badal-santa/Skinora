// Image assets resolved by Metro — `require("./x.png")` returns an image source.
declare module "*.png" {
  const source: import("react-native").ImageSourcePropType;
  export = source;
}
declare module "*.jpg" {
  const source: import("react-native").ImageSourcePropType;
  export = source;
}
