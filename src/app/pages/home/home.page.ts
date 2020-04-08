import { Component, OnInit } from "@angular/core";
import { BasePage } from "../BasePage";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage extends BasePage implements OnInit {
  constructor(protected authService: AuthService) {
    super(authService);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.onViewEnter();

    console.log("This is a message from home page!");
  }
}
