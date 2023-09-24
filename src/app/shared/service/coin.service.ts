import { Injectable } from '@angular/core';
import {HttpClient}  from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  public url =`https://api.coingecko.com/api/v3/coins/`
  constructor(private _http : HttpClient) { }

  getAllcoins():Observable<any>{
    return this._http.get(this.url)
  }

  getSingleDataItem(coinId:string){
    return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }
  }

