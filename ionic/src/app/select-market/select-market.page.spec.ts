import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectMarketPage } from './select-market.page';

describe('SelectMarketPage', () => {
  let component: SelectMarketPage;
  let fixture: ComponentFixture<SelectMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
