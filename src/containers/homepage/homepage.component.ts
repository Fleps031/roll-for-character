import { Component } from '@angular/core';
// import { FichaRpgGridMapComponent } from '../../components/ficha-rpg-grid-map/ficha-rpg-grid-map.component';
import { HeaderContainerComponent } from '../header-container/header-container.component';
import { CharacterSheetContainerComponent } from '../character-sheet-container/character-sheet-container.component';

@Component({
  selector: 'ficha-rpg-home-page',
  standalone: true,
  imports: 
  [
    HeaderContainerComponent,
    CharacterSheetContainerComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
