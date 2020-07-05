import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'account/overview',
    loadChildren: () => import('./pages/account-overview/account-overview.module').then( m => m.AccountOverviewPageModule)
  },
  {
    path: 'account/entries',
    loadChildren: () => import('./pages/account-entries/account-entries.module').then( m => m.AccountEntriesPageModule)
  },
  {
    path: 'account/settings',
    loadChildren: () => import('./pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contraption-select-modal',
    loadChildren: () => import('./modals/contraption-select-modal/contraption-select-modal.module').then( m => m.ContraptionSelectModalPageModule)
  },
  {
    path: 'register-car',
    loadChildren: () => import('./pages/register-car/register-car.module').then( m => m.RegisterCarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
