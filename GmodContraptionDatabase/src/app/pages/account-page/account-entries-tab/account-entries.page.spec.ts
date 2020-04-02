import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

import { AccountEntriesPage } from './account-entries.page';

describe('Tab2Page', () => {
  let component: AccountEntriesPage;
  let fixture: ComponentFixture<AccountEntriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountEntriesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountEntriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
