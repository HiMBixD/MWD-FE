import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../../web-pages.reducer';
import {searchRequestAddMoney, selectMyInfoLoadingState, selectRequestAddMoneyList} from '../../../store';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-approve-add-money',
  templateUrl: './approve-add-money.component.html',
  styleUrls: ['./approve-add-money.component.scss']
})
export class ApproveAddMoneyComponent implements OnInit {
  dataResponse$: Observable<any>;
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store<WebPagesManagementState>
  ) { }

  ngOnInit(): void {
  }

  onSearch(data): void {
    this.store.dispatch(searchRequestAddMoney({body: data}));
    this.dataResponse$ = this.store.pipe(select(selectRequestAddMoneyList));
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
  }
}
