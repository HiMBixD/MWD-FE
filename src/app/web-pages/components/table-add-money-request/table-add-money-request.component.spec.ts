import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddMoneyRequestComponent } from './table-add-money-request.component';

describe('TableAddMoneyRequestComponent', () => {
  let component: TableAddMoneyRequestComponent;
  let fixture: ComponentFixture<TableAddMoneyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAddMoneyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAddMoneyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
