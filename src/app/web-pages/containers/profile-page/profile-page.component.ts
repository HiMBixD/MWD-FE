import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {Observable} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {selectMyInfo} from '../../store';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userDetails$: Observable<UserDetailsModel>;
  isVisible = false;
  isConfirmLoading;
  constructor(private store: Store<WebPagesManagementState>) { }

  ngOnInit(): void {
    this.userDetails$ = this.store.pipe(select(selectMyInfo));

  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
