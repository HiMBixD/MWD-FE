import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPublishSongComponent } from './request-publish-song.component';

describe('RequestPublishSongComponent', () => {
  let component: RequestPublishSongComponent;
  let fixture: ComponentFixture<RequestPublishSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPublishSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPublishSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
