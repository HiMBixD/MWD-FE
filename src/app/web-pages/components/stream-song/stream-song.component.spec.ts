import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSongComponent } from './stream-song.component';

describe('StreamSongComponent', () => {
  let component: StreamSongComponent;
  let fixture: ComponentFixture<StreamSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
