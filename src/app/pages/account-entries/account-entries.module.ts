import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountEntriesPageRoutingModule } from './account-entries-routing.module';

import { AccountEntriesPage } from './account-entries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountEntriesPageRoutingModule
  ],
  declarations: [AccountEntriesPage]
})
export class AccountEntriesPageModule {}
