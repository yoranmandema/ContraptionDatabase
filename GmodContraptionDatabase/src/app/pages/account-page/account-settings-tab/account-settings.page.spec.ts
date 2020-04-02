import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

import { AccountSettingsPage } from './account-settings.page';

describe('Tab3Page', () => {
  let component: AccountSettingsPage;
  let fixture: ComponentFixture<AccountSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSettingsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
