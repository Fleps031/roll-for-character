import { Component, OnInit, Input } from '@angular/core';
import { CharacterSheetInputBoxComponent } from '../character-sheet-input-box/character-sheet-input-box.component';
import { CharacterSheetStatsDisplayEnum } from '../../enums/CharacterSheetDndStatsEnum.enum';
import { CharacterSheetService } from '../../akita-services/character-sheet/character-sheet.service';

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
  @Input() statName!: CharacterSheetStatsDisplayEnum;


  constructor(
    private characterSheetService: CharacterSheetService
  ) {
  }

  ngOnInit() {
  }

  updateStatValue(value: string){
    this.characterSheetService.updateStatValue()
  }


}
