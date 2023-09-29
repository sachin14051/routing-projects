import { Injectable } from '@angular/core';
import { Iproduct } from '../model/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray: Array<Iproduct> =[
  {
    pname: "samsung",
    pid:"mwswmffefims",
    pstatus :"dispatched",
    canReturn:false
  },
  {
    pname: "iphone 15",
    pid:"mwswmfefefims",
    pstatus :"inProgress",
    canReturn:true

  },
  {
    pname: "blackberry",
    pid:"mwswrrzafmims",
    pstatus :"inProgress",
    canReturn:false

  },
  {
    pname: "one plus ",
    pid:"mwswmhghims",
    pstatus :"inProgress",
    canReturn:true

  },

]
  constructor(private _route:Router) { }

  getAllProducts(){
    return this.productsArray
  }

  getSingleProducts(pId:string){
    return this.productsArray.find(prod =>{
      return prod.pid===pId
    })
  }

  getUpdatePrdouct(productObj:Iproduct){
     return this.productsArray.forEach(ele =>{
     if(productObj.pid=== ele.pid ){
      ele.pname= productObj.pname,
      ele.pstatus =productObj.pstatus;
     }
     this._route.navigate(['/products'])

     })  
  
  }




}
