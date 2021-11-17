import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {
  createPlayList,
  getPlayListByUsername,
  getPlayListItem,
  selectMyInfo,
  selectPlayListByUsername,
  selectPlayListItem
} from '../../store';
import {take, takeUntil} from 'rxjs/operators';
import {Observable, Subject, timer} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Player} from '@vime/angular';
import {AppConstants} from '../../../app.constant';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<WebPagesManagementState>,
    private fb: FormBuilder
  ) { }
  playLists$: Observable<any>;
  itemInList$: Observable<any>;
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

  pickedPlayLSong;
  isAddedViewed = false;

  playerOptions = {
    isPaused: true,
    isLoop: false,
    isRandom: false
  };
  unsubcribe$ = new Subject();
  @ViewChild('player') player: Player;
  currentTime = 0;
  urlMusic = AppConstants.urlMusic;
  currentPlayedIndex;
  itemInList = [];
  playList = [];
  // onTimeUpdate(event: CustomEvent<number>): void {
  //   // this.currentTime = event.detail;
  // }
  voice = 100;

  ngOnInit(): void {
    this.createListForm = this.fb.group({
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
    this.itemInList$ = this.store.pipe(select(selectPlayListItem));
    this.itemInList$.pipe(take(2)).subscribe(val => {
      if (val) {
        this.itemInList = val;
        this.currentPlayedIndex = 0;
        this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
      }
    });
    this.userDetails$ = this.store.pipe(select(selectMyInfo));
    this.userDetails$.pipe(take(2)).subscribe(val => {
      if (val) {
        this.userDetails = val;
        this.store.dispatch(getPlayListByUsername({body: {string: this.userDetails.userName}}));
        this.playLists$ = this.store.pipe(select(selectPlayListByUsername));
        this.playLists$.pipe(take(2)).subscribe(value => {
          if (value) {
            this.playList = value;
            this.pickPlayList(this.playList.find(x => x.title === 'Recommends'));
          }
        });
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
    this.store.dispatch(getPlayListItem({body: {string: itemList.listId}}));
  }

  pickPlaySong(itemList, index): void {
    this.currentPlayedIndex = index;
    this.pickedPlayLSong = itemList;
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

  playPrevious(): void {
    if (this.currentPlayedIndex <= 0) {
      this.currentPlayedIndex = this.itemInList.length - 1;
    } else {
      this.currentPlayedIndex--;
    }
    this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
    // this.player.play().then();
  }

  playNext(): void {
    if (this.itemInList.length <= this.currentPlayedIndex + 1) {
      this.currentPlayedIndex = 0;
    } else {
      this.currentPlayedIndex++;
    }
    this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
    // this.player.play().then();
  }

  setPausePlay(): void {
    if (this.player?.playbackReady) {
      this.playerOptions = {
        isLoop: this.playerOptions.isLoop,
        isPaused: !this.playerOptions.isPaused,
        isRandom: this.playerOptions.isRandom
      };
      if (this.playerOptions.isPaused) {
        this.player.pause().then();
      } else {
        this.player.play().then();
      }
    }
  }

  onPlayBackStart(): void {
    // this.currentTime = event.detail;
    if (!this.isAddedViewed) {
      timer(this.player.duration * 1000 * 0.8).pipe(takeUntil(this.unsubcribe$)).subscribe(val => {
        if (val === 0) {
          // this.addView.emit(this.productInfo.productId);
          this.isAddedViewed = !this.isAddedViewed;
        }
      });
    }
  }

  getPercentage(): any {
    return this.player?.duration ? (this.player.currentTime / this.player.duration) * 100 : 0;
  }

  updateSlider(event): void {
    const percentage = (event.layerX - 20) / event.target.offsetWidth;
    this.currentTime = percentage * this.player.duration;
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  onPlayBackEnd(): void {
    this.isAddedViewed = !this.isAddedViewed;
    if (this.playerOptions.isLoop) {
      this.player.play().then();
    }
  }
}
