import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { BackendService, Store } from "../services/backend.service"
import { Observable, combineLatest, of, forkJoin, merge, zip } from 'rxjs';
import { filter, map, flatMap, scan, combineAll, startWith, first } from 'rxjs/operators';
import { StoreService } from './store.service';



@Injectable({
  providedIn: 'root'
})
export class CodeService {
	codes: string[];

	constructor() {
		this.codes = []
	}

	getAllCodes (){
		return this.codes;
	}

	saveCode(code: string) {
		this.codes.push(code)
	}
}