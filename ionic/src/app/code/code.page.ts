import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreCapacity, Store } from '../services/backend.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  public booking_code: number;
  public store_capacity: StoreCapacity;
  public store: Store;

  constructor(
    private router: Router
  ) { 
    const params = <any>this.router.getCurrentNavigation().extras.state
    console.log(params)
    this.booking_code = params.identifier
    this.store = <Store>params.store_capacity.store
    this.store_capacity = <StoreCapacity>params.store_capacity
  }

  ngOnInit() {
  }

}
