import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePublishSongComponent } from './approve-publish-song.component';

describe('ApprovePublishSongComponent', () => {
  let component: ApprovePublishSongComponent;
  let fixture: ComponentFixture<ApprovePublishSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePublishSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePublishSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
