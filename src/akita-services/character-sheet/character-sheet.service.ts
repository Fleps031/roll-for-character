import { Injectable } from '@angular/core';
import { CharacterSheetStore } from './character-sheet.store';
import { CharacterSheetStat } from '../../Interfaces/CharacterSheetStat';
import { HttpClient } from '@angular/common/http';
import { take, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterSheetService {

  constructor(
    private characterSheetStore: CharacterSheetStore, 
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

  getAbilityScoreBonus(abilityScoreValue: number): number{
    const bonusFormula = (abilityScoreValue - 10)/2
    return Math.floor(bonusFormula)
  }

  updateAbilityScoreValue(value: number, valueBonus: number): void{
    this.characterSheetStore.updateDndSheetAbilityScore()
  }
}