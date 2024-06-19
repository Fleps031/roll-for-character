import { Component, OnInit } from '@angular/core';
import { CharacterSheetTitleBoxComponentComponent } from '../../components/character-sheet-title-box-component/character-sheet-title-box-component.component';
import { CharacterSheetPlayerBioComponentComponent } from '../../components/character-sheet-player-bio-component/character-sheet-player-bio-component.component';
import { CharacterSheetPlayerMainStatsComponentComponent } from '../../components/character-sheet-player-main-stats-component/character-sheet-player-main-stats-component.component';

@Component({
  selector: 'app-character-sheet-container',
  templateUrl: './character-sheet-container.component.html',
  styleUrls: ['./character-sheet-container.component.css'],
  standalone: true,
  imports: [
    CharacterSheetTitleBoxComponentComponent,
    CharacterSheetPlayerBioComponentComponent,
    CharacterSheetPlayerMainStatsComponentComponent,
  ]
})
export class CharacterSheetContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
