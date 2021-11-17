import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getRecommendSongs, searchProduct, selectProductList, selectRecommendSongs} from '../../store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {ActivatedRoute} from '@angular/router';
import {Pagination} from '../../models/pagination.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  listSong$: Observable<any>;
  listRecommend$: Observable<any>;
  pagination: Pagination;
  visibleDrawer = false;
  searchBody;
  formAdvance: FormGroup;
  constructor(
    private store: Store<WebPagesManagementState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.pagination = {
      pageNumber: 0,
      pageSize: 10
    };
    this.searchBody = {
      productName: '',
      productType: '',
      username: '',
      isPublish: true,
      pagination: this.pagination
    };
    this.formAdvance = this.fb.group({
      productName: [''],
      productType: [''],
      username: [''],
    });
    this.activatedRoute.params.subscribe(params => {
      if (params.productName) {
        this.searchBody = {
          productName: params.productName,
          productType: '',
          username: '',
          isPublish: true,
          pagination: this.pagination
        };
        this.formAdvance.patchValue({productName: params.productName});
      } else {
        this.searchBody = {
          productName: '',
          productType: '',
          username: '',
          isPublish: true,
          pagination: this.pagination
        };
      }
      this.onSearchProduct();
    });
    this.store.dispatch(getRecommendSongs());
    this.listSong$ = this.store.pipe(select(selectProductList));
    this.listRecommend$ = this.store.pipe(select(selectRecommendSongs));
  }

  onSearchProduct(pagination?): void {
    this.store.dispatch(searchProduct({body: this.searchBody}));
  }

  onAdvanceSearch(): void {
    const {value} = this.formAdvance;
    this.searchBody = {
      productName: value.productName,
      productType: value.productType,
      username: value.username,
      isPublish: true,
      pagination: this.pagination
    };
    this.onSearchProduct();
  }

  open(): void {
    this.visibleDrawer = true;
  }

  close(): void {
    this.visibleDrawer = false;
  }
}
