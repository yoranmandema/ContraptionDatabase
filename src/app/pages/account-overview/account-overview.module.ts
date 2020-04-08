import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountOverviewPageRoutingModule } from './account-overview-routing.module';

import { AccountOverviewPage } from './account-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountOverviewPageRoutingModule
  ],
  declarations: [AccountOverviewPage]
})
export class AccountOverviewPageModule {}
