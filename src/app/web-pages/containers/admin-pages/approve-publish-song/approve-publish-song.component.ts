import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../../web-pages.reducer';
import {
  searchRequestPublishSong,
  selectMyInfoLoadingState,
  selectRequestPublishSongList
} from '../../../store';

@Component({
  selector: 'app-approve-publish-song',
  templateUrl: './approve-publish-song.component.html',
  styleUrls: ['./approve-publish-song.component.scss']
})
export class ApprovePublishSongComponent implements OnInit {
  dataResponse$: Observable<any>;
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store<WebPagesManagementState>
  ) { }

  ngOnInit(): void {
  }

  onSearch(data): void {
    this.store.dispatch(searchRequestPublishSong({body: data}));
    this.dataResponse$ = this.store.pipe(select(selectRequestPublishSongList));
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
  }

}
