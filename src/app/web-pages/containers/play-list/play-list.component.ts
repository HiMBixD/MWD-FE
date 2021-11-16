import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {createPlayList, getPlayListByUsername, selectMyInfo, selectPlayListByUsername} from '../../store';
import {take, takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {
  playLists$: Observable<any>;
  userDetails$: Observable<UserDetailsModel>;
  userDetails: UserDetailsModel;
  isVisibleCreateList = false;
  createListForm: FormGroup;
  // picked item
  pickedPlayList: {
    listId: number,
    username: string,
    description: string,
    title: string,
  };

  playerOptions = {
    isPaused: true,
    isLoop: false,
    isRandom: false
  };
  constructor(
    private store: Store<WebPagesManagementState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createListForm = this.fb.group({
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
    this.userDetails$ = this.store.pipe(select(selectMyInfo));
    this.userDetails$.pipe(take(2)).subscribe(val => {
      if (val) {
        this.userDetails = val;
        this.store.dispatch(getPlayListByUsername({body: {string: this.userDetails.userName}}));
        this.playLists$ = this.store.pipe(select(selectPlayListByUsername));
      }
    });
  }

  showModalCreateList(): void {
    this.isVisibleCreateList = true;
  }

  handleOk(): void {
    this.store.dispatch(createPlayList({
      body: this.createListForm.value,
      searchBody: {string: this.userDetails.userName},
      callback: () => this.handleCancel()
    }));
  }

  handleCancel(): void {
    this.isVisibleCreateList = false;
  }

  pickPlayList(itemList): void {
    this.pickedPlayList = itemList;
  }

  setLooping(): void {
    this.playerOptions = {
      isLoop: !this.playerOptions.isLoop,
      isPaused: this.playerOptions.isPaused,
      isRandom: false
    };
  }
  setRandom(): void {
    this.playerOptions = {
      isLoop: false,
      isPaused: this.playerOptions.isPaused,
      isRandom: !this.playerOptions.isRandom
    };
  }
  setPausePlay(): void {
    this.playerOptions = {
      isLoop: this.playerOptions.isLoop,
      isPaused: !this.playerOptions.isPaused,
      isRandom: this.playerOptions.isRandom
    };
  }
}
