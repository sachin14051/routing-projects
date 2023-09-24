import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../service/coin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  coinsArray: any;
  searchValue!: string;

  constructor(private _http: CoinService,
    ) { }

  ngOnInit(): void {
  this.coinsArray =   this._http.getAllcoins().subscribe((data :Array<any>) => {
     this.coinsArray=data
    })
  
//console.log(this.coinsArray)
  }
}
