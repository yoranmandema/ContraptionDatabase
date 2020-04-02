import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountOverviewPage } from './account-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AccountOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountOverviewPageRoutingModule {}
