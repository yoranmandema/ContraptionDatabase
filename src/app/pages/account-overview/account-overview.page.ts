import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BasePage } from '../BasePage';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.page.html',
  styleUrls: ['./account-overview.page.scss'],
})
export class AccountOverviewPage extends BasePage implements OnInit {

  constructor(
    protected authService: AuthService
  ) {
    super(authService);
  }
  
  ngOnInit() {
  }

}
