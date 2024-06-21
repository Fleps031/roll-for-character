import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderContainerComponent } from '../header-container/header-container.component';
import { CharacterSheetContainerComponent } from '../character-sheet-container/character-sheet-container.component';
import { SessionService } from '../../akita-services/session.service';
import { CharacterSheetService } from '../../akita-services/character-sheet/character-sheet.service';

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
export class HomepageComponent implements OnInit, OnDestroy{
  constructor(private sessionService: SessionService){

  }

  ngOnInit(): void{
    this.updateSession();
  }

  updateSession(): void{
    this.sessionService.updateUserName('SessionName')
    this.sessionService.updateToken('SessionName');
  }

  ngOnDestroy(): void {
    this.sessionService.destroyStore();
  }
}
