import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Iproduct } from '../../model/model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   productsArray: Array<Iproduct> = []
  constructor(private _productsSerive:ProductsService) { }

  ngOnInit(): void {
  this.productsArray = this._productsSerive.getAllProducts()
  }

}
