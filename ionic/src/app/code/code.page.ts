import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { StoreCapacity, Store } from '../services/backend.service';
import { CodeService } from '../services/code.service';

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
    private router: Router,
    private storage: Storage,
    private codeService: CodeService
  ) { 
    const params = <any>this.router.getCurrentNavigation().extras.state
    this.storage.set("code", params.identifier);
    this.booking_code = params.identifier;
    this.codeService.saveCode(params.identifier);
    this.store = <Store>params.store_capacity.store;
    this.store_capacity = <StoreCapacity>params.store_capacity;
  }

  ngOnInit() {
  }

}
