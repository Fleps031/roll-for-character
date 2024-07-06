import { Query } from '@datorama/akita';
import { CharacterSheetState, CharacterSheetStore } from './character-sheet.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CharacterSheetQuery extends Query<CharacterSheetState>{
    readonly selectDndAbilityScores$: Observable<any>
    readonly selectDndClasses$: Observable<any>

    constructor(protected override store: CharacterSheetStore){
        super(store)

        this.selectDndAbilityScores$ = this.select('abilityScores');
        this.selectDndClasses$ = this.select('dndClasses')
    }


}