import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CharacterSheetStatsDisplayEnum } from '../../enums/CharacterSheetDndStatsEnum.enum';
import { CharacterSheetDndClassEnum } from '../../enums/CharacterSheetDndClassEnum.enum';
import { CharacterSheetDndClass } from '../../Interfaces/CharacterSheetDndClass.model';
import { CharacterSheetDndAbilityScore, CharacterSheetDndBioInfo } from '../../Interfaces/CharacterSheetDndSheetInfo.model';

export interface CharacterSheetState {
    charName?: string,
    bioInfo?: CharacterSheetDndBioInfo,
    abilityScores?: CharacterSheetDndAbilityScore[]
    dndClasses: CharacterSheetDndClass[]
}



export function createInitialState(): CharacterSheetState {
 return {
    charName: '',
    bioInfo: {},
    abilityScores: [],
    dndClasses: []
 };
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'character-sheet'})
export class CharacterSheetStore extends Store<CharacterSheetState> {
  constructor() {
    super(createInitialState());
  }

  updateDndSheetAbilityScore(abilityScores: CharacterSheetDndAbilityScore[]): void{
    this.update({ abilityScores })
  }
}
