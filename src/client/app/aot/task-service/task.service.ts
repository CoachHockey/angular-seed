import { Inject, Injectable } from '@angular/core';
import { IndexedDBStore } from '../../indexeddb-cache/indexeddb-store';
import { taskIndexedDBStore } from '../test-api.cache';

@Injectable()
export class TaskService {
  constructor(
    @Inject(taskIndexedDBStore) protected cache : IndexedDBStore
  ) {
    // DEBUG
    console.info('initialized TaskService');
  }

  // DEBUG
  test() {
    console.log('Testing TaskService!');
  }
}
