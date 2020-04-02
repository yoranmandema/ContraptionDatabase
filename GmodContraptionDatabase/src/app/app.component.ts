import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupSideMenu();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage (page) {
    this.navCtrl.navigateForward(page.url);
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
