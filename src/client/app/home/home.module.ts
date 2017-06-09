import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { TestAPIModule } from '../aot/test-api-module';

import { TaskService } from '../aot/task-service/task.service';
import { UserService } from '../aot/user-service/user.service';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, TestAPIModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService, UserService, TaskService]
})
export class HomeModule { }
