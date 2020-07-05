import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContraptionSelectModalPage } from './contraption-select-modal.page';

describe('ContraptionSelectModalPage', () => {
  let component: ContraptionSelectModalPage;
  let fixture: ComponentFixture<ContraptionSelectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraptionSelectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContraptionSelectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
