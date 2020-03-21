import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  public searchMarkets(postalCode, typeOfMarket) {
    const url = `/assets/markets.json?plz=${postalCode}&type_of_market=${typeOfMarket}`;
    const markets = this.http.get(url);
    return markets;
  }
}
