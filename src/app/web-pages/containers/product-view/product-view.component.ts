import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productId;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  url = `${environment.unauUrl}/stream/`;
  id = '617a808dbbad8404140adc01';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.productId) {
        this.productId = params.productId;
      }
    });
    // this.productId = this.route.snapshot.data.productId;
    // this.router
    console.log(this.productId);

  }

}
