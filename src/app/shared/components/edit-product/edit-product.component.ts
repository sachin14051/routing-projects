import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Iproduct, prodctStatus } from '../../model/model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId!:string;
  productObj!:Iproduct
  constructor(private _routes:ActivatedRoute,
               private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productId = this._routes.snapshot.params['pId'];
    this.productObj = this._productService.getSingleProducts(this.productId)!
    console.log(this.productObj)
  }

  onUpdateProduct(pname:HTMLInputElement, status:HTMLSelectElement){
       let obj :Iproduct ={
        pname : pname.value as string,
        pstatus : status.value as prodctStatus,
        pid : this.productId,
        canReturn:this.productObj.canReturn
       }
       this._productService.getUpdatePrdouct(obj)
  }

  onDeleteProduct(){
    
  }

}
