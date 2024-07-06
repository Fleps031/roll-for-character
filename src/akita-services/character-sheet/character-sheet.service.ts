import { Injectable } from '@angular/core';
import { CharacterSheetStore } from './character-sheet.store';
import { HttpClient } from '@angular/common/http';
import { take, throwError } from 'rxjs';
import { CharacterSheetDndAbilityScore, CharacterSheetDndAbilityScoreList } from '../../Interfaces/CharacterSheetDndSheetInfo.model';
import { CharacterSheetQuery } from './character-sheet.query';
import { CharacterSheetStatsDisplayEnum, CharacterSheetStatsEnum } from '../../enums/CharacterSheetDndStatsEnum.enum';

@Injectable({ providedIn: 'root' })
export class CharacterSheetService {

  constructor(
    private characterSheetStore: CharacterSheetStore, 
    private characterSheetQuery: CharacterSheetQuery,
    private http: HttpClient
  ){}

  getDndApiInfo(endpoint: string, extraInfo?: string): void{
    let apiUrl = `https://www.dnd5eapi.co/api/${endpoint}`
    if(extraInfo){
      apiUrl = `${apiUrl}/${extraInfo}`
    }

    this.http.get(apiUrl)
    .pipe(take(1))
    .subscribe({
      next: (response: object) => {
        console.log(response)
      },
      error: error =>{
        return throwError(() => error);
      }
    });
  }
  setDefaultAbilityScores(): void{
    const statObject: CharacterSheetDndAbilityScore = {
      abilityScoreValue: 0,
      abilityScoreBonus: 0,
    }
    const defaultAbilityScoreObjects: CharacterSheetDndAbilityScoreList = {
      str: {...statObject},
      dex: {...statObject},
      wis: {...statObject},
      int: {...statObject},
      con: {...statObject},
      char: {...statObject},
    }

    this.characterSheetStore.updateDndSheetAbilityScore(defaultAbilityScoreObjects);
  };
  
  getAbilityScoreBonusFormula(abilityScoreValue: number): number{
    const bonusFormula = (abilityScoreValue - 10)/2
    return Math.floor(bonusFormula)
  }

  updateAbilityScores(stat: CharacterSheetStatsEnum, abilityScore: CharacterSheetDndAbilityScore ): void{
    const selectDndAbilityScores$ = this.characterSheetQuery.selectDndAbilityScores$

    selectDndAbilityScores$
    .pipe(take(1))
    .subscribe({
      next: (response: CharacterSheetDndAbilityScoreList) => {
        let currentAbilityScores: CharacterSheetDndAbilityScoreList = response 
        currentAbilityScores[stat] = {...abilityScore}
        this.characterSheetStore.updateDndSheetAbilityScore(currentAbilityScores)
      }
    }); 
  }
}