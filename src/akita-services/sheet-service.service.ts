import { Injectable } from '@angular/core';
import { SheetServiceStore } from '../store/sheet-service.store';
import { SessionStore } from './session.store';

/**
 * SheetService service
 *
 * @export
 * @class SheetServiceService
 */
@Injectable({ providedIn: 'root' })
export class SheetServiceService {

  constructor(private sessionStore: SessionStore) {}

  updateUserName(newName: string): void{
    this.sessionStore.update({name: newName});
  }


  destroyStore(): void {
    this.sessionStore.destroy();
  }
}
