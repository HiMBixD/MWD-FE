import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {searchProduct, selectProductList} from '../../store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {ActivatedRoute} from '@angular/router';
import {Pagination} from '../../models/pagination.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  listSong$: Observable<any>;
  pagination: Pagination;
  constructor(
    private store: Store<WebPagesManagementState>,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.pagination = {
      pageNumber: 0,
      pageSize: 10
    };
    this.activatedRoute.params.subscribe(params => {
      if (params.productName) {
        this.onSearchProduct(params.productName);
      } else {
        this.onSearchProduct('');
      }
    });
    this.listSong$ = this.store.pipe(select(selectProductList));
  }

  onSearchProduct(searchProductName: any): void {
    this.store.dispatch(searchProduct({
      body: {
        productName: searchProductName,
        productType: '',
        username: '',
        isPublish: true,
        pagination: this.pagination
      }}));
  }
}
