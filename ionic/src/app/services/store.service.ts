import { Injectable } from '@angular/core';
import { BackendService } from "../services/backend.service"
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import {Store} from '../services/backend.service';
import {Address} from '../services/backend.service';


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

	filterStores(plz: number, type: string){
		
	}
}