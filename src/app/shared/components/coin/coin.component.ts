import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from '../../service/coin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  cname!:string
  coinObj :any
  constructor(private _routes:ActivatedRoute,
    private _coinService: CoinService) { }

  ngOnInit(): void {
  this.cname=this._routes.snapshot.params["cNameId"];

  }


}
