import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRegisterSingerComponent } from './approve-register-singer.component';

describe('ApproveRegisterSingerComponent', () => {
  let component: ApproveRegisterSingerComponent;
  let fixture: ComponentFixture<ApproveRegisterSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRegisterSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRegisterSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
