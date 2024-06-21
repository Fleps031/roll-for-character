import { Injectable } from '@angular/core';
import { CharacterSheetStore } from './character-sheet.store';
import { CharacterSheetStat } from '../../Interfaces/CharacterSheetStat';


@Injectable({ providedIn: 'root' })
export class CharacterSheetService {

  constructor(private characterSheetStore: CharacterSheetStore) {}

  updateStoreStats(stats: CharacterSheetStat[]){
    this.characterSheetStore.updateStats(stats)
  }
}
