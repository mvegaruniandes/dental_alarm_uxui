import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsAlarmsPage } from './lists-alarms.page';

const routes: Routes = [
  {
    path: '',
    component: ListsAlarmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsAlarmsPageRoutingModule {}
