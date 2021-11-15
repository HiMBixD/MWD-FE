import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMusicPageComponent } from './upload-music-page.component';

describe('UploadMusicPageComponent', () => {
  let component: UploadMusicPageComponent;
  let fixture: ComponentFixture<UploadMusicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMusicPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMusicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
