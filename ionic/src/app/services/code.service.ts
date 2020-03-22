import { Injectable } from '@angular/core';
import { BackendService, Store } from "../services/backend.service"
import { Observable, combineLatest, of, forkJoin, merge, zip } from 'rxjs';
import { filter, map, flatMap, scan, combineAll, startWith, first } from 'rxjs/operators';
import { StoreService } from './store.service';



@Injectable({
  providedIn: 'root'
})
export class CodeService {

	constructor(
		private storage: Storage
	) {
		this.refresh();
	}

	getAllCodes (){
			return this.storage.get("code")
	}

	findById(id: number) {
	}

	refresh(){
	}
}