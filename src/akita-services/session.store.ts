import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
   token: string;
   name: string;
}

export function createInitialState(): SessionState {
  return {
    token: '',
    name: ''
  };
}

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
