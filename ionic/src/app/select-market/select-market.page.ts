import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-market',
  templateUrl: './select-market.page.html',
  styleUrls: ['./select-market.page.scss'],
})
export class SelectMarketPage implements OnInit {
  public markets = [
    { id: 1, name: "Laden 1", address: "Musterweg 1" },
    { id: 2, name: "Laden 2", address: "Musterweg 2" },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
