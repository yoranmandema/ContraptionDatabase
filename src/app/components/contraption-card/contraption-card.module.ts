import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraptionCardComponent } from './contraption-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [ 
      CommonModule, 
      FormsModule, 
      IonicModule,
      NgxSkeletonLoaderModule
    ],
  declarations: [ContraptionCardComponent],
  exports: [ContraptionCardComponent]
})
export class ContraptionCardComponentModule {}
