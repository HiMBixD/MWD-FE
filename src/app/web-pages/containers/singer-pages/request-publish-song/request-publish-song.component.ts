import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Pagination} from '../../../models/pagination.model';
import {WebPagesManagementState} from '../../../web-pages.reducer';
import {requestPublishProduct, searchProduct, selectMyInfo, selectMyInfoLoadingState, selectProductList} from '../../../store';
import {Observable, Subject} from 'rxjs';
import {UserDetailsModel} from '../../../models/user-details.model';
import {takeUntil} from 'rxjs/operators';
import {AppConstants} from '../../../../app.constant';

@Component({
  selector: 'app-request-publish-song',
  templateUrl: './request-publish-song.component.html',
  styleUrls: ['./request-publish-song.component.scss']
})
export class RequestPublishSongComponent implements OnInit, OnDestroy {
  isVisiblePickFile = false;
  pagination: Pagination = {
    pageSize: 3,
    pageNumber: 0
  };
  isLoading$: Observable<boolean>;
  userDetails$: Observable<UserDetailsModel>;
  userDetails: UserDetailsModel;
  listProductNotPublished$: Observable<any>;
  requestPublishForm: FormGroup;
  unsubcribe$ = new Subject();
  songChecked = {
    id: null,
    name: null,
    fileId: null
  };
  urlMusic = AppConstants.urlMusic;
  urlImg = AppConstants.urlImg;
  constructor(
    private fb: FormBuilder,
    private store: Store<WebPagesManagementState>,

  ) { }

  ngOnInit(): void {
    this.requestPublishForm = this.fb.group({
      productName: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      productId: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.maxLength(20)]]
    });
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
    this.userDetails$ = this.store.pipe(select(selectMyInfo));
    this.userDetails$.pipe(takeUntil(this.unsubcribe$)).subscribe(val => {
      if (val) {
        this.userDetails = val;
      }
    });
  }

  openModalPickFile(): void {
    this.isVisiblePickFile = true;
    this.pagination = {
      pageSize: 5,
      pageNumber: 0
    };
    this.store.dispatch(searchProduct({
      body: {
        username: this.userDetails.userName,
        isPublish: false,
        productName: '',
        productType: '',
        pagination: this.pagination
      }
    }));
    this.listProductNotPublished$ = this.store.pipe(select(selectProductList));
  }
  onSearch(page?): void {
    if (page) {
      this.pagination = {
        pageSize: this.pagination.pageSize,
        pageNumber: page - 1
      };
    }
    this.store.dispatch(searchProduct({body: {username: this.userDetails.userName, isPublish: false, productName: '', productType: '',
        pagination: this.pagination}}));
  }

  OnRequest(): void {
    this.store.dispatch(requestPublishProduct({body: this.requestPublishForm.value}));
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  checkedItem($event: any): void {
    if (this.songChecked.id === $event.productId) {
      this.songChecked = {
        name: null,
        id: null,
        fileId: null
      };
    } else {
      this.songChecked = {
        id: $event.productId,
        name: $event.productName,
        fileId: $event.fileId
      };
    }
  }

  handleCancel(): void {
    this.isVisiblePickFile = false;
  }

  handleOk(): void {
    this.requestPublishForm.patchValue({productId: this.songChecked.id});
    this.isVisiblePickFile = false;
  }
}
