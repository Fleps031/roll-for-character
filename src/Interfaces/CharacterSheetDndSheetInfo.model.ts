import { CharacterSheetDndClassEnum } from "../enums/CharacterSheetDndClassEnum.enum";
import { CharacterSheetStatsDisplayEnum, CharacterSheetStatsEnum } from '../enums/CharacterSheetDndStatsEnum.enum'
import { CharacterSheetDndRaceEnum } from "../enums/CharacterSheetDndRaceEnum.enum";

export interface CharacterSheetDndBioInfo{
    xpCurrent?: number,
    xpMax?: number,
    charClass?: CharacterSheetDndClassEnum,
    charRace?: CharacterSheetDndRaceEnum,
}

// export interface CharacterSheetDndAbilityScore{
//     abilityScore: CharacterSheetStatsEnum,
//     abilityScoreName: CharacterSheetStatsDisplayEnum,
//     abilityScoreValue: number,
//     abilityScoreBonus: number
// }

export interface CharacterSheetDndAbilityScore{
    abilityScoreValue: number,
    abilityScoreBonus: number,
}
export interface CharacterSheetDndAbilityScoreList{
    str: CharacterSheetDndAbilityScore,
    con: CharacterSheetDndAbilityScore,
    dex: CharacterSheetDndAbilityScore,
    int: CharacterSheetDndAbilityScore,
    wis: CharacterSheetDndAbilityScore,
    char: CharacterSheetDndAbilityScore,
}