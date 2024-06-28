import { Query } from '@datorama/akita';
import { CharacterSheetState, CharacterSheetStore } from './character-sheet.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CharacterSheetQuery extends Query<CharacterSheetState>{
    readonly selectApiEndpoints$: Observable<any>
    readonly selectDndClasses$: Observable<any>
    
    constructor(protected override store: CharacterSheetStore){
        super(store)

        this.selectApiEndpoints$ = this.select('apiEndpoints');
        this.selectDndClasses$ = this.select('classes');
    }


}