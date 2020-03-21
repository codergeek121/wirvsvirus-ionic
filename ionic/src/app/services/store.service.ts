import { Injectable } from '@angular/core';
import { BackendService } from "../services/backend.service"
import { Observable } from 'rxjs';

interface Store {
	id: number;
	name: string,
	description: string;
	lat: string;
	long: string;
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
}