import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetStatInputCardComponentComponent } from '../character-sheet-stat-input-card-component/character-sheet-stat-input-card-component.component';

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

  stats = ['strength','dexterity', 'constitution', 'intelligence']
  constructor() { }

  ngOnInit() {
  }

}
