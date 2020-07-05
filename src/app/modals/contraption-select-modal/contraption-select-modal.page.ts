import { Component, OnInit } from '@angular/core';
import { BaseModal } from '../BaseModal';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contraption-select-modal',
  templateUrl: './contraption-select-modal.page.html',
  styleUrls: ['./contraption-select-modal.page.scss'],
})
export class ContraptionSelectModalPage extends BaseModal implements OnInit  {

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController
  ) { 
    super(modalController);
  }

  ngOnInit() {
  }

  public openPage (page) {
    this.navCtrl.navigateForward(page);

    this.dismiss();
  }
}
