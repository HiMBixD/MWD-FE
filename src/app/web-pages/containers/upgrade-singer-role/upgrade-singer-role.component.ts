import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {requestBeSinger, selectMyInfoLoadingState} from '../../store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upgrade-singer-role',
  templateUrl: './upgrade-singer-role.component.html',
  styleUrls: ['./upgrade-singer-role.component.scss']
})
export class UpgradeSingerRoleComponent implements OnInit {
  information = '';
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store<WebPagesManagementState>
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
  }

  OnRegister(): void {
    this.store.dispatch(requestBeSinger({
      body: {
        linkFile: this.information
      }
    }));
  }
}
