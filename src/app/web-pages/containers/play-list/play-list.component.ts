import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Inject,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef, ViewRef
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {
  createPlayList, getListOwnProduct,
  getPlayListByUsername,
  getPlayListItem,
  removeFromPlayList, selectListOwnProduct,
  selectMyInfo,
  selectPlayListByUsername,
  selectPlayListItem
} from '../../store';
import {take, takeUntil} from 'rxjs/operators';
import {from, Observable, Subject, timer} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Player} from '@vime/angular';
import {AppConstants} from '../../../app.constant';
import {DatePipe} from '@angular/common';
import _ from 'lodash';
@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
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
  pickedOwnList = true;
  pickedPlayList: {
    listId: number,
    username: string,
    description: string,
    title: string,
  };
  pickedPlayLSong;
  isAddedViewed = false;
  unsubcribe$ = new Subject();
  @ViewChild('player') player: Player;
  currentTime = 0;
  urlMusic = AppConstants.urlMusic;
  currentPlayedIndex;
  itemInList = [];
  playList = [];
  voice = 100;
  isLoop = false;
  isRandom = false;
  isPlaying = false;
  currentUrl = '';
  reRenderValue = true;
  ngOnInit(): void {
    this.createListForm = this.fb.group({
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
    this.store.dispatch(getListOwnProduct({body: {}}));
    this.itemInList$ = this.store.pipe(select(selectPlayListItem));
    this.itemInList$.pipe(takeUntil(this.unsubcribe$)).subscribe(val => {
      if (val && this.pickedOwnList === false) {
        this.itemInList = val;
        this.currentPlayedIndex = 0;
        this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
        this.getUrlSong();
      }
    });
    this.store.pipe(select(selectListOwnProduct)).pipe(takeUntil(this.unsubcribe$)).subscribe(val => {
      if (val && this.pickedOwnList) {
        this.itemInList = val;
        this.currentPlayedIndex = 0;
        this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
        this.getUrlSong();
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
            // this.pickPlayList(this.playList.find(x => x.title === 'Recommends'));
          }
        });
      }
    });
  }

  private rerender(): void {
    this.reRenderValue = false;
    timer(1).pipe(takeUntil(this.unsubcribe$)).subscribe(val => {
      if (val === 0) {
        this.reRenderValue = true;
      }
    });
  }

  formatterProgress(value: number): string {
    const pipe = new DatePipe(this.locale);
    // const val = pipe.transform(new Date(value * 1000), 'mm:ss');
    return new Date(value * 1000).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }).toString();
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
  pickOwnList(): void {
    this.pickedOwnList = true;
    this.pickedPlayList = null;
    this.store.dispatch(getListOwnProduct({body: {}}));
  }

  pickPlayList(itemList): void {
    this.pickedOwnList = false;
    this.pickedPlayList = itemList;
    this.store.dispatch(getPlayListItem({body: {string: itemList.listId}}));
  }

  pickPlaySong(itemList, index): void {
    this.currentPlayedIndex = index;
    this.pickedPlayLSong = itemList;
    this.playCurrentPath();
  }

  setLooping(): void {
    this.isRandom = false;
    this.isLoop = !this.isLoop;
  }
  setRandom(): void {
    this.isLoop = false;
    this.isRandom = !this.isRandom;
  }

  playPrevious(): void {
    if (this.currentPlayedIndex <= 0) {
      this.currentPlayedIndex = this.itemInList.length - 1;
    } else {
      this.currentPlayedIndex--;
    }
    this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
    this.playCurrentPath();
  }

  playNext(index?): void {
    if (index?.toString()) {
      if (index === this.currentPlayedIndex) {
        let val = _.random(this.itemInList.length - 1);
        while (val === index) {
          val = _.random(this.itemInList.length - 1);
        }
        this.currentPlayedIndex = val;
      } else {
        this.currentPlayedIndex = index;
      }
    } else if (this.itemInList.length <= this.currentPlayedIndex + 1) {
      this.currentPlayedIndex = 0;
    } else {
      this.currentPlayedIndex++;
    }
    this.pickedPlayLSong = this.itemInList[this.currentPlayedIndex].product;
    this.playCurrentPath();
  }

  setPausePlay(): void {
    if (this.player?.playbackReady) {
      if (this.player.playing) {
        this.isPlaying = false;
        this.player.pause().then();
      } else {
        this.isPlaying = true;
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
  playCurrentPath(): void {
    this.getUrlSong();
    this.player.currentTime = 0;
    this.rerender();
  }
  loadStart(): void {
    if (this.isPlaying) {
      this.currentTime = 0.001;
      this.player.play().then();
    }
  }

  getUrlSong(): void {
    this.currentUrl = this.urlMusic + this.pickedPlayLSong.fileId;
  }

  updateSlider(event): void {
    this.currentTime = event;
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  onPlayBackEnd(): void {
    this.isAddedViewed = !this.isAddedViewed;
    if (this.player.loop === false) {
      this.playNext();
    } else if (this.isRandom) {
      this.playNext(_.random(this.itemInList.length - 1));
    }
  }

  callBackRemoveSong(): void {
    this.store.dispatch(getPlayListItem({body: {string: this.pickedPlayList.listId}}));
  }

  removeFromList(): void {
    this.store.dispatch(removeFromPlayList({
      body: {
        string: this.itemInList[this.currentPlayedIndex].id
      },
      callback: () => this.callBackRemoveSong()
    }));
  }
}
