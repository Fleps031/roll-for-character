import { CharacterSheetDndClassEnum } from "../enums/CharacterSheetDndClassEnum.enum";
import { CharacterSheetStatsDisplayEnum } from '../enums/CharacterSheetDndStatsEnum.enum'
import { CharacterSheetDndRaceEnum } from "../enums/CharacterSheetDndRaceEnum.enum";

export interface CharacterSheetDndBioInfo{
    xpCurrent?: number,
    xpMax?: number,
    charClass?: CharacterSheetDndClassEnum,
    charRace?: CharacterSheetDndRaceEnum,
}

export interface CharacterSheetDndAbilityScore{
    abilityScoreName: CharacterSheetStatsDisplayEnum,
    abilityScoreValue: number,
    abilityScoreBonus: number
}