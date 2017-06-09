// test-api.cache.factory.ts
import { IndexedDBCache } from '../indexeddb-cache/indexeddb-cache';
import { IndexedDBStore } from '../indexeddb-cache/indexeddb-store';

export function mainIndexedDBCacheFactory() { return new IndexedDBCache('main'); }
export function userIndexedDBStoreFactory(testIndexedDBCache: IndexedDBCache) { return new IndexedDBStore(testIndexedDBCache, 'user'); }
export function taskIndexedDBStoreFactory(testIndexedDBCache: IndexedDBCache) { return new IndexedDBStore(testIndexedDBCache, 'task'); }
