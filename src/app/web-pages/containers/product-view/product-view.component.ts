import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {AppConstants} from '../../../app.constant';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productId;
  poster;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  url = AppConstants.urlMusic;
  urlImg = AppConstants.urlImg;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.productId) {
        this.productId = params.productId;
      }
      if (params.poster) {
        this.poster = params.poster;
      }
    });
  }

}
