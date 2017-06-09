// indexeddb-store.ts
import { Injectable } from '@angular/core';
import { IndexedDBCache } from './indexeddb-cache';

@Injectable()
export class IndexedDBStore {

  constructor(
    protected database : IndexedDBCache,
    protected storeName : string
  ) {
    // DEBUG
    console.info('initialized IndexedDBStore with name \''+storeName+'\' & database \''+database.getDatabaseName()+'\'');
  }

  // DEBUG
  getStoreName() { return this.storeName; }

}
