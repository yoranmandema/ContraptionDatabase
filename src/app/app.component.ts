import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as dotenv from 'dotenv'
import * as Countries from 'i18n-iso-countries';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public menuPages;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.initializeApp();

    Countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupSideMenu();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage (page) {
    this.navCtrl.navigateForward(page);
  }

  setupSideMenu () {
    this.menuPages = [
      {
        title: "Account",
        url: "/account",
        icon: "person-outline"
      }
    ];
  }
}
