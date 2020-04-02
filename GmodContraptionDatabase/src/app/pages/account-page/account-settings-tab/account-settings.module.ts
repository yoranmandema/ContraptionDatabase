import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountSettingsPage } from './account-settings.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AccountSettingsPage }])
  ],
  declarations: [AccountSettingsPage]
})
export class AccountSettingsPageModule {}
