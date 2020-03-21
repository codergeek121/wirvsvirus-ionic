import { Injectable } from '@angular/core';
import { BackendService } from "../services/backend.service"
import { Observable } from 'rxjs';

interface Store {
	id: number;
	name: string,
	description: string;
	//address: Address[];
	lat: string;
	long: string;
}

interface Address {
	id: number;
	street: number;
	housenumber: number;
	zip_code: number;
	city: number;
}

interface StoreCapacity {
	id: number;
	store: string,
	start: string;
	end: string;
	total_capacity: number;
	reserved_capacity: number;
	available_capacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
	public $stores: Observable<Store[]>;

	constructor(
		private backendService: BackendService
	) {
		this.refresh();
	}

	refresh(){
			this.$stores = this.backendService.getStores();
			return this.$stores;
	}

	filterStores(plz: number, type: String){
		//this.$stores.pipe( map(store => store[0]), filter(store => store.id > 1))
	}
}