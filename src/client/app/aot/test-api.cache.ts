// test-api.cache.ts
import { InjectionToken, Provider } from '@angular/core';
import { IndexedDBCache } from '../indexeddb-cache/indexeddb-cache';
import { IndexedDBStore } from '../indexeddb-cache/indexeddb-store';
import { mainIndexedDBCacheFactory, taskIndexedDBStoreFactory, userIndexedDBStoreFactory } from './test-api.cache.factory';

// Caches

export const mainIndexedDBCache = new InjectionToken<IndexedDBCache>('mainIndexedDBCache');

export let mainIndexedDBCacheProvider : Provider = {
  provide: mainIndexedDBCache,
  useFactory: mainIndexedDBCacheFactory
};

// Stores

export const userIndexedDBStore = new InjectionToken<IndexedDBStore>('userIndexedDBStore');

export let userIndexedDBStoreProvider : Provider = {
  provide: userIndexedDBStore, deps: [mainIndexedDBCache],
  useFactory: userIndexedDBStoreFactory
};

export const taskIndexedDBStore = new InjectionToken<IndexedDBStore>('taskIndexedDBStore');

export let taskIndexedDBStoreProvider : Provider = {
  provide: taskIndexedDBStore, deps: [mainIndexedDBCache],
  useFactory: taskIndexedDBStoreFactory
};
