import { Component, Input, OnInit } from '@angular/core';
import { CharacterSheetTitleBoxComponentComponent } from '../../components/character-sheet-title-box-component/character-sheet-title-box-component.component';
import { CharacterSheetPlayerBioComponentComponent } from '../../components/character-sheet-player-bio-component/character-sheet-player-bio-component.component';
import { CharacterSheetPlayerMainStatsComponentComponent } from '../../components/character-sheet-player-main-stats-component/character-sheet-player-main-stats-component.component';
import { CommonModule } from '@angular/common';
import { CharacterSheetDndClass } from '../../Interfaces/CharacterSheetDndClass.model';

@Component({
  selector: 'app-character-sheet-container',
  templateUrl: './character-sheet-container.component.html',
  styleUrls: ['./character-sheet-container.component.css'],
  standalone: true,
  imports: [
    CharacterSheetTitleBoxComponentComponent,
    CharacterSheetPlayerBioComponentComponent,
    CharacterSheetPlayerMainStatsComponentComponent,
    CommonModule
  ]
})
export class CharacterSheetContainerComponent implements OnInit {
  @Input() dndClasses?: CharacterSheetDndClass[]
  constructor() {}

  ngOnInit() {
    console.log('init')
  }

}
