import { Component, OnInit } from '@angular/core';
import { CharacterSheetTitleBoxComponentComponent } from '../../components/character-sheet-title-box-component/character-sheet-title-box-component.component';
import { CharacterSheetPlayerBioComponentComponent } from '../../components/character-sheet-player-bio-component/character-sheet-player-bio-component.component';

@Component({
  selector: 'app-character-sheet-container',
  templateUrl: './character-sheet-container.component.html',
  styleUrls: ['./character-sheet-container.component.css'],
  standalone: true,
  imports: [
    CharacterSheetTitleBoxComponentComponent,
    CharacterSheetPlayerBioComponentComponent,
  ]
})
export class CharacterSheetContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
