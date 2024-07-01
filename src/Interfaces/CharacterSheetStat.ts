import { CharacterSheetStatsDisplayEnum } from "../enums/CharacterSheetDndStatsEnum.enum";

export interface CharacterSheetStat{
  stat: {
    statName: string,
    statValue: number,
    statBonus: number,
  }

}
