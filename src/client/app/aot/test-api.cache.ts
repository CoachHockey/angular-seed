// test-api.cache.ts
import { InjectionToken, Provider } from '@angular/core';
import { IndexedDBCache } from '../indexeddb-cache/indexeddb-cache';
import { IndexedDBStore } from '../indexeddb-cache/indexeddb-store';

// Caches

/*
 * InjectionToken is exported for injection in the constructor
 * Functions cannot be arrow functions and have to be exported for AoT
 * https://github.com/rangle/angular-2-aot-sandbox#func-in-providers-usefactory-top
 */
export const mainIndexedDBCache = new InjectionToken<IndexedDBCache>('mainIndexedDBCache');
export function mainIndexedDBCacheFactory() { return new IndexedDBCache('main'); }

export let mainIndexedDBCacheProvider : Provider = {
  provide: mainIndexedDBCache,
  useFactory: mainIndexedDBCacheFactory
};

// Stores

export const userIndexedDBStore = new InjectionToken<IndexedDBStore>('userIndexedDBStore');
export function userIndexedDBStoreFactory(testIndexedDBCache: IndexedDBCache) { return new IndexedDBStore(testIndexedDBCache, 'user'); }

export let userIndexedDBStoreProvider : Provider = {
  provide: userIndexedDBStore, deps: [mainIndexedDBCache],
  useFactory: userIndexedDBStoreFactory
};

export const taskIndexedDBStore = new InjectionToken<IndexedDBStore>('taskIndexedDBStore');
export function taskIndexedDBStoreFactory(testIndexedDBCache: IndexedDBCache) { return new IndexedDBStore(testIndexedDBCache, 'task'); }

export let taskIndexedDBStoreProvider : Provider = {
  provide: taskIndexedDBStore, deps: [mainIndexedDBCache],
  useFactory: taskIndexedDBStoreFactory
};
