import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetStatInputCardComponentComponent } from '../character-sheet-stat-input-card-component/character-sheet-stat-input-card-component.component';
import { CharacterSheetStatsDisplayEnum, CharacterSheetStatsEnum } from '../../enums/CharacterSheetDndStatsEnum.enum'
import { CharacterSheetQuery } from '../../akita-services/character-sheet/character-sheet.query';
import { CharacterSheetDndAbilityScore, CharacterSheetDndAbilityScoreList } from '../../Interfaces/CharacterSheetDndSheetInfo.model';
import { Observable, Subject, take, takeUntil } from 'rxjs';
@Component({
  selector: 'app-character-sheet-player-main-stats-component',
  templateUrl: './character-sheet-player-main-stats-component.component.html',
  styleUrls: ['./character-sheet-player-main-stats-component.component.scss'],
  standalone: true,
  imports: [
    CharacterSheetStatInputCardComponentComponent,
    CommonModule,
  ],
})
export class CharacterSheetPlayerMainStatsComponentComponent implements OnInit {
  private readonly unsubscribe$: Observable<any>
  stats: CharacterSheetStatsEnum[]
  dndAbilityScores!: CharacterSheetDndAbilityScoreList

  constructor(
    private characterSheetQuery: CharacterSheetQuery
  ) {
    this.stats = [
      CharacterSheetStatsEnum.str,
      CharacterSheetStatsEnum.con,
      CharacterSheetStatsEnum.dex,
      CharacterSheetStatsEnum.int,
      CharacterSheetStatsEnum.wis,
      CharacterSheetStatsEnum.char,
  ]
    this.unsubscribe$ = new Subject();
  }

  ngOnInit(){
    this.selectDndAbilityScores();
  }

  ngOnChanges(){
    this.selectDndAbilityScores();
  }

  selectDndAbilityScores(): void{
    this.characterSheetQuery.selectDndAbilityScores$
    .pipe(take(1))
    .subscribe((response)=> this.dndAbilityScores = response);
  }
  
  
  getDndAbilityScore(stat: CharacterSheetStatsEnum): CharacterSheetDndAbilityScore{
    if(this.dndAbilityScores[stat]){
      return this.dndAbilityScores[stat]
    }
    else{
      let defaultAbilityScore: CharacterSheetDndAbilityScore = {
        abilityScoreValue: 0,
        abilityScoreBonus: 0,
      }
      return defaultAbilityScore
    }
  };


}
