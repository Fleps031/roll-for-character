import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderContainerComponent } from '../header-container/header-container.component';
import { CharacterSheetContainerComponent } from '../character-sheet-container/character-sheet-container.component';
import { SessionService } from '../../akita-services/session.service';
import { CharacterSheetService } from '../../akita-services/character-sheet/character-sheet.service';
import { Observable, take } from 'rxjs';
import { CharacterSheetQuery } from '../../akita-services/character-sheet/character-sheet.query';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ficha-rpg-home-page',
  standalone: true,
  imports:
  [
    HeaderContainerComponent,
    CharacterSheetContainerComponent,
    CommonModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit, OnDestroy{
  
  apiEndpoints$: Observable<object>
  dndClasses$: Observable<any>
  apiEndpointList: object
  
  constructor(
    private sessionService: SessionService,
    private characterSheetService: CharacterSheetService,
    private characterSheetQuery: CharacterSheetQuery
  ){
    this.apiEndpoints$ = this.characterSheetQuery.selectApiEndpoints$
    this.dndClasses$ = this.characterSheetQuery.selectDndClasses$
    this.apiEndpointList = {}
  }

  ngOnInit(): void{
    this.updateSession();
    this.characterSheetService.getDndApiEndpoints();
    this.characterSheetService.getDndApiInfo('classes', 'barbarian');
    
    this.getApiEndpoints();

   
  }

  updateSession(): void{
    this.sessionService.updateUserName('SessionName')
    this.sessionService.updateToken('SessionName');
  }

  getApiEndpoints(): void{
    this.apiEndpoints$
    .pipe(take(2))
    .subscribe(resp => {
      console.log(resp)
      this.apiEndpointList = resp;
    })
  }

  ngOnDestroy(): void {
    this.sessionService.destroyStore();
  }
}
