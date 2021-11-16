import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePublishSongComponent } from './table-publish-song.component';

describe('TablePublishSongComponent', () => {
  let component: TablePublishSongComponent;
  let fixture: ComponentFixture<TablePublishSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePublishSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePublishSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
