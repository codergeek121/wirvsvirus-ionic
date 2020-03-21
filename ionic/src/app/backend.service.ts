import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomePage } from './home/home.page';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

	constructor(private http: HttpClient) {}
	
  public searchMarkets(postalCode : String, typeOfMarket : String) {
    const url = `/assets/json/markets.json?plz=${postalCode}&type_of_market=${typeOfMarket}`;
    return this.http.get(url);
    
	}
	
	public getFreeSlots(marketId : number, dateString : String) {
    const url = `/assets/json/freeSlots.json?id=${marketId}&date=${dateString}`;
    return this.http.get(url);
	}
	
	public bookSlot(slot_id : number) {
    const url = `/assets/json/bookSlot.json`;
    return this.http.post(url, {id: slot_id});
	}
	
  public validateBookingCode(bookingCode : String) {
    const url = `/assets/json/validateBookingCode.json`;
    return this.http.post(url, {booking_code: bookingCode});
	}
	
}
