import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: 'account',
    component: AccountPage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./account-overview-tab/account-overview.module').then(m => m.AccountOverviewPageModule)
          }
        ]
      },
      {
        path: 'entries',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./account-entries-tab/account-entries.module').then(m => m.AccountEntriesPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./account-settings-tab/account-settings.module').then(m => m.AccountSettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/account/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/account/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
