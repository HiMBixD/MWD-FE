import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmDeleteRequestComponent } from './modal-confirm-delete-request.component';

describe('ModalConfirmDeleteRequestComponent', () => {
  let component: ModalConfirmDeleteRequestComponent;
  let fixture: ComponentFixture<ModalConfirmDeleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmDeleteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
