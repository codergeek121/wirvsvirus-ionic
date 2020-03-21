import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PickerController } from '@ionic/angular';
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

  market = {
    name: "Testmarkt abc",
    street: "Musterweg 13",
    plz: "80801",
    city: "München"
  }

  selectedTimeslot = {
    desc: ""
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
    console.log("Timeslot gebucht:", this.selectedTimeslot)
    this.router.navigate(['code'], { state: { booking_code: "ax4s39", market_id: 1} })
  }
}
