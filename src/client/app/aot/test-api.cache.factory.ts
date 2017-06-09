// test-api.cache.factory.ts
import { IndexedDBCache } from '../indexeddb-cache/indexeddb-cache';
import { IndexedDBStore } from '../indexeddb-cache/indexeddb-store';

// factory functions for FactoryProviders as exports instead of inline:
// https://github.com/rangle/angular-2-aot-sandbox#func-in-providers-usefactory-top
export function mainIndexedDBCacheFactory() { return new IndexedDBCache('main'); }
export function userIndexedDBStoreFactory(testIndexedDBCache: IndexedDBCache) { return new IndexedDBStore(testIndexedDBCache, 'user'); }
export function taskIndexedDBStoreFactory(testIndexedDBCache: IndexedDBCache) { return new IndexedDBStore(testIndexedDBCache, 'task'); }
