import { Injectable } from '@angular/core';
import { BackendService, Store } from "../services/backend.service"
import { Observable, combineLatest, of, forkJoin, merge, zip } from 'rxjs';
import { filter, map, flatMap, scan, combineAll, startWith } from 'rxjs/operators';


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