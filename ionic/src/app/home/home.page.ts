import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  supermarketTypes = [
    {val: "Lebensmittel", isChecked: true },
    {val: "Drogerie", isChecked: false },
    {val: "Apotheke", isChecked: false },
    {val: "Garten", isChecked: false },
    {val: "Baumarkt", isChecked: false },
    {val: "Tierbedarf", isChecked: false },
  ];

  plz = "";

  constructor(
    private backend: BackendService,
    private router: Router
    ) {}

  public startSearch() {
    console.log(this.supermarketTypes)
    console.log(this.plz)
    this.backend.searchMarkets(this.plz, "Lebensmittel").subscribe(result => {
      console.log(result)
    })

    this.router.navigate(["select-market"])
  }
}
