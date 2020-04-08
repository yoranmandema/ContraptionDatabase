import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountEntriesPage } from './account-entries.page';

const routes: Routes = [
  {
    path: '',
    component: AccountEntriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountEntriesPageRoutingModule {}
