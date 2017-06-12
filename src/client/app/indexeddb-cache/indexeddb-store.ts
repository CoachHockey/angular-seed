// indexeddb-store.ts
import { IndexedDBCache } from './indexeddb-cache';

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
