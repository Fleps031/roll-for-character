import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

/**
 * SessionService service
 *
 * @export
 * @class SessionService
 */
@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore) {}

  updateUserName(newName: string): void{
    this.sessionStore.update({name: newName});
  }

  updateToken( newToken: string): void{
    this.sessionStore.update({token: newToken})
  }
  destroyStore(): void {
    this.sessionStore.destroy();
  }
}
