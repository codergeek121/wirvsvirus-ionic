import { Component } from '@angular/core';

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

  constructor() {}

  public startSearch() {
    console.log(this.supermarketTypes)
    console.log(this.plz)
  }
}
