import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../../web-pages.reducer';
import {
  searchRequestRegisterSinger,
  selectMyInfoLoadingState,
  selectRequestRegisterSingerList
} from '../../../store';

@Component({
  selector: 'app-approve-register-singer',
  templateUrl: './approve-register-singer.component.html',
  styleUrls: ['./approve-register-singer.component.scss']
})
export class ApproveRegisterSingerComponent implements OnInit {
  dataResponse$: Observable<any>;
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store<WebPagesManagementState>
  ) { }

  ngOnInit(): void {
  }

  onSearch(data): void {
    this.store.dispatch(searchRequestRegisterSinger({body: data}));
    this.dataResponse$ = this.store.pipe(select(selectRequestRegisterSingerList));
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
  }

}
