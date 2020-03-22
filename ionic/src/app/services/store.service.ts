import { Injectable } from '@angular/core';
import { BackendService, Store } from "../services/backend.service"
import { Observable, combineLatest, of, forkJoin, merge, zip } from 'rxjs';
import { filter, map, flatMap, scan, combineAll, startWith, first } from 'rxjs/operators';


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

	findById(id: number): Observable<Store> {
		return this.$stores.pipe(map(stores => stores.find(store => store.id == id)));
	}

	refresh(){
			this.$stores = this.backendService.getStores();
			return this.$stores;
	}
}