// test-api-module.ts
import { NgModule, ModuleWithProviders } from '@angular/core';
import { mainIndexedDBCacheProvider, taskIndexedDBStoreProvider, userIndexedDBStoreProvider } from './test-api.cache';

@NgModule({
  imports: [], declarations: [], exports: []
})
export class TestAPIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TestAPIModule,
      providers: [mainIndexedDBCacheProvider, userIndexedDBStoreProvider, taskIndexedDBStoreProvider]
    };
  }
}
