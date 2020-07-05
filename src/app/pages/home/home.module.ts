import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ContraptionCardComponentModule } from 'src/app/components/contraption-card/contraption-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxSkeletonLoaderModule,
    ContraptionCardComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
