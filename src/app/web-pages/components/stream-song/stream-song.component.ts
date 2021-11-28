import {
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {AppConstants} from '../../../app.constant';
import {Player} from '@vime/angular';
import {interval, of, Subject, timer} from 'rxjs';
import {concatMapTo, takeUntil} from 'rxjs/operators';
import {Pagination} from '../../models/pagination.model';
import {
  addComment,
  addToPlayList,
  buyProduct,
  deleteComment,
  getIsOwnProduct,
  getPlayListByUsername, getProductInfo, getTopSellingFromUser,
  loadAllComments,
  loadMyInfo, markProduct
} from '../../store';
import {Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {DatePipe} from '@angular/common';
import {UserDetailsModel} from '../../models/user-details.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-stream-song',
  templateUrl: './stream-song.component.html',
  styleUrls: ['./stream-song.component.scss']
})
export class StreamSongComponent implements OnInit, OnDestroy, OnChanges {
  @Input() productInfo;
  @Input() topSellingOfUser;
  @Input() playList;
  @Input() userDetails: UserDetailsModel;
  @Input() productId: any;
  @Input() comments: any;
  @Input() isLogin: boolean;
  @Input() isLoading: boolean;
  @Input() isOwnSong: boolean;
  @Input() poster;
  @ViewChild('player') player: Player;
  @Output() addView = new EventEmitter();
  @Output() searchComment = new EventEmitter();

  urlMusic = AppConstants.urlMusic;
  urlImg = AppConstants.urlImg;

  currentTime = 0;
  isAddedViewed = false;
  unsubcribe$ = new Subject();
  pagination: Pagination;
  replyMessage = '';
  replyToId;
  commentToAdd = '';
  mark = 0;
  replyToData = '';

  timePlayed = 0;
  interval;
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private store: Store<WebPagesManagementState>,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.pagination = {
      pageSize: 5,
      pageNumber: 0
    };
  }
  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.player.playing) {
        this.timePlayed++;
        if (!this.isOwnSong && this.player.currentTime > this.player.duration * 0.4) {
          this.toastrService.warning('Please buy the song to continue listening');
          this.player.pause().then();
          this.pauseTimer();
        }
        if (!this.isAddedViewed && this.player.duration * 0.8 < this.timePlayed) {
          this.addView.emit(this.productInfo.productId);
          this.pauseTimer();
          this.isAddedViewed = !this.isAddedViewed;
        }
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  onTimeUpdate(event: CustomEvent<number>): void {
    // this.currentTime = event.detail;
  }

  onPlayBackStart(): void {
    // this.currentTime = event.detail;
    console.log('start play back');
    this.timePlayed = 0;
    this.startTimer();
    // if (!this.isAddedViewed) {
    //   timer(this.player.duration * 1000 * 0.8).pipe(takeUntil(this.unsubcribe$)).subscribe(val => {
    //     if (val === 0) {
    //       this.addView.emit(this.productInfo.productId);
    //       this.isAddedViewed = !this.isAddedViewed;
    //     }
    //   });
    // }
  }

  onPlayingChange(): void {
    if (this.player.playing) {
      console.log('start timer');
      this.startTimer();
    } else {
      console.log('pause timer');
      this.pauseTimer();
    }
  }

  formatDate(val): any {
    const pipe = new DatePipe(this.locale);
    const time = new Date(val);
    return pipe.transform(val, 'dd/MM/yyyy h:mm:ss a z');
  }
  onSearch(page?): void {
    if (page) {
      this.pagination = {
        pageSize: this.pagination.pageSize,
        pageNumber: page - 1
      };
    }
    this.searchComment.emit({
      productId: this.productInfo.productId,
      pagination: this.pagination
    });
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productInfo?.productId && !this.comments) {
      // this.store.pipe(selectListCommentsProduct);
      this.store.dispatch(loadAllComments({body: {productId: this.productInfo.productId, pagination: this.pagination}}));
      if (this.isLogin) {
        this.store.dispatch(getIsOwnProduct({body: {string: this.productInfo.productId}}));
      }
    }
    if (this.productInfo?.mark) {
      this.mark = Math.round(this.productInfo.mark) / 2;
    }
    if (this.productInfo?.username && !this.topSellingOfUser) {
      this.store.dispatch(getTopSellingFromUser({body: {string: this.productInfo?.username}}));
    }
    if (this.userDetails?.userName && !this.playList) {
      this.store.dispatch(getPlayListByUsername({body: {string: this.userDetails.userName}}));
    }
  }

  handleAddComment(): void {
    this.store.dispatch(addComment({
      body: {
        productId: this.productInfo.productId,
        parentId: this.replyToId,
        commentData: this.commentToAdd
      },
      callback: () => this.callBackAddComment()
    }));
  }

  callBackAddComment(): void {
    this.searchComment.emit({
      productId: this.productInfo.productId,
      pagination: this.pagination
    });
    this.replyToId = '';
    this.commentToAdd = '';
    this.replyMessage = '';
  }

  callBackDeleteComment(): void {
    this.searchComment.emit({
      productId: this.productInfo.productId,
      pagination: this.pagination
    });
  }

  deleteComment(commentId: any): void {
    this.store.dispatch(deleteComment({
      body: {string: commentId},
      callback: () => this.callBackDeleteComment()
    }));
  }

  buyProduct(): void {
    this.store.dispatch(buyProduct({body: {string: this.productInfo.productId}, callback: () => this.callBackBuyProduct()}));

  }
  callBackBuyProduct(): void {
    this.store.dispatch(loadMyInfo());
    this.store.dispatch(getIsOwnProduct({body: {string: this.productInfo.productId}}));
    this.store.dispatch(getProductInfo({body: {string: this.productInfo.fileId}}));
  }

  callBackMarkProduct(): void {
    this.store.dispatch(getProductInfo({body: {string: this.productInfo.fileId}}));
  }

  addToList(listId: any): void {
    this.store.dispatch(addToPlayList({body: {listId, productId: this.productInfo.productId}}));
  }

  onRateSong(): void {
    this.store.dispatch(markProduct({
      body: {
        mark: this.mark * 2,
        productId: this.productInfo.productId,
      },
      callback: () => this.callBackMarkProduct()
    }));
  }
}
