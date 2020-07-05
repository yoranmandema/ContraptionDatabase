import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraptionSelectModalPage } from './contraption-select-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ContraptionSelectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraptionSelectModalPageRoutingModule {}
