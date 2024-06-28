import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CharacterSheetStatsNamesEnum } from '../../enums/Character-Sheet-Stats.enum';
import { CharacterSheetDndClassEnum } from '../../enums/CharacterSheetDndClassEnum';
import { CharacterSheetStat } from '../../Interfaces/CharacterSheetStat';
import { CharacterSheetDndClass } from '../../Interfaces/CharacterSheetDndClass.model';

export interface CharacterSheetState {
  apiEndpoints: object;
  stats: CharacterSheetStat[];
  classes: CharacterSheetDndClassEnum[];
  testeStore: string;
}



export function createInitialState(): CharacterSheetState {
 return {
  apiEndpoints: {},
  stats: [],
  testeStore: 'testeStoreInitialState',
  classes: [
    CharacterSheetDndClassEnum.barbarian, 
    CharacterSheetDndClassEnum.rogue
  ]
 };
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'character-sheet'})
export class CharacterSheetStore extends Store<CharacterSheetState> {
  constructor() {
    super(createInitialState());
  }

  updateStats(stats: CharacterSheetStat[]): void{
    this.update({ stats })
  }

  updateApiEndpoints(apiEndpoints: object){
    this.update({ apiEndpoints })
  }
}
