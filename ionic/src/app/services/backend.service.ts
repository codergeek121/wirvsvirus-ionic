import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Store {
	id: number;
	name: string,
	address: Address;
	type: Type;
	description: string;
	lat: string;
	long: string;
}

export interface StoreCapacity {
	id: number;
	store: string,
	start: string;
	end: string;
	total_capacity: number;
	reserved_capacity: number;
	available_capacity: number;
}

export interface Address {
	id: number;
	street: string;
	housenumber: string;
	zip_code: string;
	city: string;
}

export interface Type {
	id: number;
	street: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

	authurl = "https://backend.geplant-einkaufen.de/api-auth/login"

	hostUrl = 'https://backend.geplant-einkaufen.de' //add host url
	//hostUrl = '' //add host url
	//marketUrl = this.hostUrl +'/assets/json/markets.json'
	storesUrl = this.hostUrl +'/stores/'
	capacitiesUrl = this.hostUrl +'/storecapacities/'
	bookSlotUrl = this.hostUrl +'/placebooking/'
	validateIdentifierUrl = this.hostUrl +'/validatebooking/'
	
	constructor(private http: HttpClient) {}

	/**
	 * So mit dem Interface in <+> auch für die Anderen
	 */
	public getStores() {
		return this.http.get<Store[]>(this.storesUrl)
	}

	public getStoresCapacity(storeId: number){
		//return this.http.get<StoreCapacity[]>('assets/json/storesCapacity.json')
		return this.http.get<StoreCapacity[]>(this.capacitiesUrl + `?storeid=${storeId}`)
	}
	
	public bookSlot(marketId: number, slot_id : number) {
			return this.http.post(this.bookSlotUrl + `${slot_id}/`, {})
	}
	
  public validateBookingCode(bookingCode : String) {
		return this.http.post(this.validateIdentifierUrl + `${bookingCode}/`, {})
	}
	
}
