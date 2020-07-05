import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContraptionSelectModalPage } from "./modals/contraption-select-modal/contraption-select-modal.page";
import { ContraptionSelectModalPageModule } from './modals/contraption-select-modal/contraption-select-modal.module';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ContraptionSelectModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ContraptionSelectModalPageModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
