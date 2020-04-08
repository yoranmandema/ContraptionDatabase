import { Component, OnInit } from '@angular/core';
import { BasePage } from '../BasePage';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage extends BasePage implements OnInit {

  constructor(
    protected authService: AuthService
  ) {
    super(authService);
  }

  ngOnInit() {
  }

}
