import { Fragment } from "react";
import { View } from "react-native";
import CalculatorTile from "./CalculatorTile";
import { toRows, type CalculatorTileData } from "./tiles";
import PromoAdCard from "../PromoAdCard";
import type { TierId } from "../../config/remoteConfig";
import { useT } from "../../i18n/language";

type Props = {
  tiles: CalculatorTileData[];
  onOpen: (tile: CalculatorTileData) => void;
  /** A side ad sits after this many rows of tiles. */
  adAfterRows?: number;
};

/** Two-column tile grid; a lone last tile spans the row. */
export default function CalculatorTileGrid({
  tiles,
  onOpen,
  adAfterRows = 2,
}: Props) {
  const t = useT();
  const tierName = (id: TierId) => t.calcHub[id];
  const titleOf = (tile: CalculatorTileData) =>
    tile.kind === "tier"
      ? `${tierName(tile.from)} → ${tierName(tile.to)}`
      : t.calcHub.robuxUsd;

  return (
    <View className="gap-4 px-5 pt-4">
      {toRows(tiles).map((row, index) => (
        <Fragment key={row.map((tile) => tile.label).join("-")}>
          <View className="flex-row justify-between">
            {row.map((tile) => (
              <CalculatorTile
                key={tile.label}
                title={titleOf(tile)}
                label={tile.label}
                color={tile.color}
                tag={t.calcHub.tileTag}
                hint={t.calcHub.tapToOpen}
                fullWidth={row.length === 1}
                onPress={() => onOpen(tile)}
              />
            ))}
          </View>
          {index === adAfterRows - 1 && <PromoAdCard variant="side" />}
        </Fragment>
      ))}
    </View>
  );
}
