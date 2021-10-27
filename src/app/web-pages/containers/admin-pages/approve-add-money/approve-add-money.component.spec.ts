import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAddMoneyComponent } from './approve-add-money.component';

describe('ApproveAddMoneyComponent', () => {
  let component: ApproveAddMoneyComponent;
  let fixture: ComponentFixture<ApproveAddMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveAddMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
