import { Component, OnInit } from "@angular/core";
import { BasePage } from "../BasePage";
import { AuthService } from "src/app/services/auth.service";
import { ModalController } from '@ionic/angular';
import { ContraptionSelectModalPage } from 'src/app/modals/contraption-select-modal/contraption-select-modal.page';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage extends BasePage implements OnInit {
  constructor(
    public modalController: ModalController,
    public vehicleService: VehicleService,
    protected authService: AuthService
    ) {
    super(authService);

    vehicleService.getVehicles().subscribe(x => console.log(x), err => console.log(err))
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.onViewEnter();

    console.log("This is a message from home page!");
  }

  public async openContraptionSelectModal () {
    const modal = await this.modalController.create({
      component: ContraptionSelectModalPage
    });

    return await modal.present();
  }
}
