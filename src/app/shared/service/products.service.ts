import { Injectable } from '@angular/core';
import { Iproduct } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray: Array<Iproduct> =[
  {
    pname: "samsung",
    pid:"mwswmffefims",
    pstatus :"inprogress"
  },
  {
    pname: "iphone 15",
    pid:"mwswmfefefims",
    pstatus :"inprogress"
  },
  {
    pname: "blackberry",
    pid:"mwswrrzafmims",
    pstatus :"inprogress"
  },
  {
    pname: "one plus ",
    pid:"mwswmhghims",
    pstatus :"inprogress"
  },

]
  constructor() { }

  getAllProducts(){
    return this.productsArray
  }
}
