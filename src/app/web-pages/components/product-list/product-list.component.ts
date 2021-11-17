import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppConstants} from '../../../app.constant';
import {Pagination} from '../../models/pagination.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pagination: Pagination;
  @Output() search = new EventEmitter();
  @Input() listProduct;
  @Input() listRecommend;
  constructor() { }

  imgUrl = AppConstants.urlImg;
  array = [1, 2, 3, 4];
  ngOnInit(): void {
    this.pagination = {
      pageNumber: 0,
      pageSize: 10
    };
  }

  onSearch(page?): void {
    if (page) {
      this.pagination = {
        pageSize: this.pagination.pageSize,
        pageNumber: page - 1
      };
    }
    this.search.emit({
      pagination: this.pagination
    });
  }
}
