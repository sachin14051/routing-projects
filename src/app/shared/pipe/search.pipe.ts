import { Pipe, PipeTransform } from '@angular/core';
import { CoinService } from '../service/coin.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
constructor(private _coin:CoinService){}
  transform(value: Array<any>, searchValue: string): Array<any> {
   if(!value){
    return []
   }
   if(!searchValue){
    return value 
   }

   console.log(typeof value)
   let filterArray =  value.filter(obj=> {
    return obj.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  return filterArray

  }

}
