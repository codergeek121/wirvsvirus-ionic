import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HomePage } from './home/home.page';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

	authurl = "https://backend.geplant-einkaufen.de/api-auth/login"

	//hostUrl = 'https://backend.geplant-einkaufen.de/' //add host url
	hostUrl = '' //add host url
	marketUrl = this.hostUrl +'/assets/json/markets.json'
	//marketUrl = this.hostUrl +'stores'
	
	constructor(private http: HttpClient) {}
	
  public searchMarkets(postalCode : String, typeOfMarket : String) {

    const url = this.marketUrl + `?plz=${postalCode}&type_of_market=${typeOfMarket}`;
    return this.http.get(url);

	}
	
	public getFreeSlots(marketId : number, dateString : String) {
		const url = `/assets/json/freeSlots.json?id=${marketId}&date=${dateString}`;
    //const url = this.marketUrl + `/${marketId}/freeSlots&date=${dateString}`;
    return this.http.get(url);
	}
	
	public bookSlot(marketId: number, slot_id : number) {
		const url = `/assets/json/bookSlot.json`;
    //const url = this.marketUrl + `/${marketId}/slots/${slot_id}`;
    //return this.http.post(url, {id: slot_id});
    return this.http.get(url);
	}
	
  public validateBookingCode(marketId: number, slotId: number, bookingCode : String) {
	  const url = `/assets/json/validateBookingCode.json`;
    //const url = this.marketUrl + `/${marketId}/slots/${slotId}/code`;
    //return this.http.post(url, {booking_code: bookingCode});
    return this.http.get(url);
	}
	
}
