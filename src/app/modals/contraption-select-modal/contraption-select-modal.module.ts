import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraptionSelectModalPageRoutingModule } from './contraption-select-modal-routing.module';

import { ContraptionSelectModalPage } from './contraption-select-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraptionSelectModalPageRoutingModule
  ],
  declarations: [ContraptionSelectModalPage]
})
export class ContraptionSelectModalPageModule {}
