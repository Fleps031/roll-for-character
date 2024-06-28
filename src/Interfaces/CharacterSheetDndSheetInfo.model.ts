import { CharacterSheetDndClassEnum } from "../enums/CharacterSheetDndClassEnum";

export interface CharacterSheetDndBioInfo{
    xpCurrent: number,
    xpMax: number,
    charClass: CharacterSheetDndClassEnum,
    charRace: CharacterSheetDndRaceEnum,
    charOrigin: CharacterSheetDndOriginEnum,
}

export interface CharacterSheetDndStatsInfo{
    
}


export interface CharacterSheetDndInfo{
    charName: string,
    bioInfo: CharacterSheetDndBioInfo,
    statsInfo: CharacterSheetDndStatsInfo
}
