import { Component, OnInit, Input } from '@angular/core';
import { CharacterSheetInputBoxComponent } from '../character-sheet-input-box/character-sheet-input-box.component';
import { CharacterSheetStatsDisplayEnum, CharacterSheetStatsEnum } from '../../enums/CharacterSheetDndStatsEnum.enum';
import { CharacterSheetService } from '../../akita-services/character-sheet/character-sheet.service';
import { CharacterSheetDndAbilityScore, CharacterSheetDndAbilityScoreList } from '../../Interfaces/CharacterSheetDndSheetInfo.model';
import { CharacterSheetQuery } from '../../akita-services/character-sheet/character-sheet.query';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-character-sheet-stat-input-card-component',
  templateUrl: './character-sheet-stat-input-card-component.component.html',
  styleUrls: ['./character-sheet-stat-input-card-component.component.scss'],
  standalone: true,
  imports: [
    CharacterSheetInputBoxComponent,
  ]
})
export class CharacterSheetStatInputCardComponentComponent implements OnInit {
  @Input() stat!: CharacterSheetStatsEnum;
  @Input() abilityScore!: CharacterSheetDndAbilityScore
  statDisplayName!: string;
  formatedAbilityScoreBonus!: string;
  private readonly unsubscribe$: Subject<void>


  constructor(
    private characterSheetService: CharacterSheetService,
    private characterSheetQuery: CharacterSheetQuery
  ) 
  {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit() {
    this.statDisplayName = CharacterSheetStatsDisplayEnum[this.stat].toUpperCase();
    this.formatAbilityScoreBonus();
  }

  ngOnChanges(){
    this.formatAbilityScoreBonus();
  }

  updateAbilityScore(abilityScoreValue: string | number){
    if(abilityScoreValue === ''){ 
      abilityScoreValue = 10;
    }
    abilityScoreValue = Number(abilityScoreValue)
    const abilityScoreBonus = this.characterSheetService.getAbilityScoreBonusFormula(abilityScoreValue);

    const abilityScoreObject: CharacterSheetDndAbilityScore = {
      abilityScoreValue: abilityScoreValue,
      abilityScoreBonus: abilityScoreBonus,
    }
    this.characterSheetService.updateAbilityScores(this.stat, abilityScoreObject);
  }

  formatAbilityScoreBonus(): void{
    const bonus = this.abilityScore.abilityScoreBonus
    this.formatedAbilityScoreBonus = bonus >= 0? `+${bonus}` : `${bonus}` 
  }

}
