import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SheetStore } from '../store/sheet.store';
import { SheetState } from '../store/sheet.model';

@Injectable({ providedIn: 'root' })
export class SheetQuery extends Query<SheetState> {

  constructor(protected store: SheetStore) {
    super(store);
  }
}
