import { Component, OnInit } from '@angular/core';
import { CharacterSheetInputBoxComponent } from '../character-sheet-input-box/character-sheet-input-box.component';

@Component({
  selector: 'app-character-sheet-player-bio-component',
  templateUrl: './character-sheet-player-bio-component.component.html',
  styleUrls: ['./character-sheet-player-bio-component.component.css'],
  standalone: true,
  imports: [
    CharacterSheetInputBoxComponent
  ]
})
export class CharacterSheetPlayerBioComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
