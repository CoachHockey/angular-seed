import { Inject, Injectable } from '@angular/core';
import { IndexedDBStore } from '../../indexeddb-cache/indexeddb-store';
import { userIndexedDBStore } from '../test-api.cache';

@Injectable()
export class UserService {
  constructor(
    @Inject(userIndexedDBStore) protected cache : IndexedDBStore
  ) {
    // DEBUG
    console.info('initialized UserService');
  }

  // DEBUG
  test() {
    console.log('Testing UserService!');
  }
}
