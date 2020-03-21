import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

	constructor(private http: HttpClient) {}

	
}