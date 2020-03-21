import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.page.html',
  styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params["id"])
    })
  }
}
