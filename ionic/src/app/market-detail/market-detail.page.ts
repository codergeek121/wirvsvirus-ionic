import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService, StoreCapacity, Store } from '../services/backend.service';
import { flatMap, map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.page.html',
  styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
  public $capacities: Observable<StoreCapacity[]>;
  public $store: Observable<Store>;
  public capacityId: number;

  public currentStore: Store;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private backend: BackendService,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    const $store_id = this.activeRoute.params.pipe(map(p => p.id))
    this.$store = $store_id.pipe(
      flatMap(id => this.storeService.findById(id))
    )

    this.$capacities = $store_id.pipe(
      flatMap(id => this.backend.getStoresCapacity(id))
    )
  }

  public bookTimeslot() {
    this.backend
      .bookSlot(null, this.capacityId)
      .subscribe(success => {
        const booking_code = success["booking_code"]
        this.router.navigate(['code'], { state: { booking_code: booking_code, market_id: 1} })
      })
  }
}
