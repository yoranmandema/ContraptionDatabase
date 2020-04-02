import { Component, OnInit } from '@angular/core';
import { BasePage } from '../BasePage';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-entries',
  templateUrl: './account-entries.page.html',
  styleUrls: ['./account-entries.page.scss'],
})
export class AccountEntriesPage extends BasePage implements OnInit {

  constructor(
    protected authService: AuthService
  ) {
    super(authService);
  }

  ngOnInit() {
  }

}
