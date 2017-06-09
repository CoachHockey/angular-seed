// indexeddb-cache.ts
import { Injectable } from '@angular/core';

@Injectable()
export class IndexedDBCache {

  constructor(
    protected databaseName : string
  ) {
    // DEBUG
    console.info('initialized IndexedDBCache with name \''+databaseName+'\'');
  }

  // DEBUG
  getDatabaseName() { return this.databaseName; }

}
