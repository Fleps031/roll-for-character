import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CharacterSheetStatsNamesEnum } from '../../enums/Character-Sheet-Stats.enum';
import { CharacterSheetStat } from '../../Interfaces/CharacterSheetStat';

export interface CharacterSheetState {
  stats: CharacterSheetStat[];
  testeStore: string;
}



export function createInitialState(): CharacterSheetState {
 return {
  stats: [],
  testeStore: 'testeStoreInitialState'
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
}
