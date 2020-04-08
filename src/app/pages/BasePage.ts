import { AuthService } from "../services/auth.service";

export class BasePage {
  constructor(protected authService: AuthService) {}


  public createSkeletonArray (length:number) : Array<any> {
    return Array(length).fill(null).map((x,i) => i);
  }

  ionViewDidEnter() {
    this.onViewEnter();
  }

  protected onViewEnter() {
    console.log("This is a message from BasePage!");
  }
}
