import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountEntriesPage } from './account-entries.page';

describe('AccountEntriesPage', () => {
  let component: AccountEntriesPage;
  let fixture: ComponentFixture<AccountEntriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEntriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountEntriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
