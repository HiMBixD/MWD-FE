import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegisterSingerComponent } from './table-register-singer.component';

describe('TableRegisterSingerComponent', () => {
  let component: TableRegisterSingerComponent;
  let fixture: ComponentFixture<TableRegisterSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRegisterSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRegisterSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
