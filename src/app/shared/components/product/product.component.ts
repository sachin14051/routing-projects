import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from '../../model/model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productObj!: Iproduct
  productId!: string
  constructor(private _routes: ActivatedRoute,
    private _productService: ProductsService) { }

  ngOnInit(): void {
    this.productId = this._routes.snapshot.params["pId"];
    console.log(this.productId)

    this.productObj = this._productService.getSingleProducts(this.productId)!

    this._routes.params
    .subscribe((params: Params) => {
      this.productId = params['pId'];
     this.productObj = this._productService.getSingleProducts(this.productId)!
   })
  }


}
