// indexeddb-cache.ts

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
