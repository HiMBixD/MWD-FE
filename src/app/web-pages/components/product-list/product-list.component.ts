import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from '../../../app.constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() listProduct;
  constructor() { }

  imgUrl = AppConstants.urlImg;
  ngOnInit(): void {
  }

}
