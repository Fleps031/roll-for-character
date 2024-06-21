import { CharacterSheetStatsNamesEnum } from "../enums/Character-Sheet-Stats.enum";

export interface CharacterSheetStat{
  stat: {
    statName: string,
    statValue: number,
    statBonus: number,
  }

}
