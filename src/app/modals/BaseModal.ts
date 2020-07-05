import { ModalController } from "@ionic/angular";

export class BaseModal {
    constructor (public modalController: ModalController) {}

    public dismiss (value?) {
        this.modalController.dismiss({
            dismissed: true,
            value: value
        })
    }
}