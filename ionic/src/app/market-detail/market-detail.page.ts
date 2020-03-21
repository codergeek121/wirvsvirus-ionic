import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService, StoreCapacity } from '../services/backend.service';
import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.page.html',
  styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
  public $capacities: Observable<StoreCapacity[]>;
  public capacityId: number;

  market = {
    name: "Testmarkt abc",
    street: "Musterweg 13",
    plz: "80801",
    city: "München"
  }

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.$capacities = this.activeRoute.params.pipe(
      flatMap(params => this.backend.getStoresCapacity(params["id"]))
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
