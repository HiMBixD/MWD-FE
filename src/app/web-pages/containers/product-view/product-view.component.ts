import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {
  addViewed,
  getProductInfo,
  loadAllComments,
  selectIsLoggedInState, selectIsOwnProduct,
  selectListCommentsProduct, selectMyInfo, selectMyInfoLoadingState, selectPlayListByUsername,
  selectProductInfo, selectTopSellingOfUser
} from '../../store';
import {Observable} from 'rxjs';
import {Pagination} from '../../models/pagination.model';
import {take} from 'rxjs/operators';
import {UserDetailsModel} from '../../models/user-details.model';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  fileId;
  poster;
  playLists$: Observable<any>;
  userDetails$: Observable<UserDetailsModel>;
  productInfo$: Observable<any>;
  comments$: Observable<any>;
  topSellingOfUser$: Observable<any>;
  isLogin$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isOwnSong$: Observable<boolean>;
  pagination: Pagination;
  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<WebPagesManagementState>,
              private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.productId) {
        this.fileId = params.productId;
        this.store.dispatch(getProductInfo({body: {string: params.productId}}));
      }
      if (params.poster) {
        this.poster = params.poster;
      }
    });
    this.comments$ = this.store.pipe(select(selectListCommentsProduct));
    this.productInfo$ = this.store.pipe(select(selectProductInfo));
    this.isLogin$ = this.store.pipe(select(selectIsLoggedInState));
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
    this.userDetails$ = this.store.pipe(select(selectMyInfo));
    this.playLists$ = this.store.pipe(select(selectPlayListByUsername));
    this.isOwnSong$ = this.store.pipe(select(selectIsOwnProduct));
    this.topSellingOfUser$ = this.store.pipe(select(selectTopSellingOfUser));
  }
  searchComment($event): void {
    this.store.dispatch(loadAllComments({body: $event}));
  }

  onAddView($event): void {
    this.store.dispatch(addViewed({body: {string: $event}}));
  }
}
