import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-popover',
  templateUrl: './filter-popover.component.html',
  styleUrls: ['./filter-popover.component.scss'],
})
export class FilterPopoverComponent implements OnInit {
  supermarketTypes = [
    {val: "Lebensmittel", isChecked: true },
    {val: "Drogerie", isChecked: false },
    {val: "Apotheke", isChecked: false },
    {val: "Garten", isChecked: false },
    {val: "Baumarkt", isChecked: false },
    {val: "Tierbedarf", isChecked: false },
  ];

  constructor() { }

  ngOnInit() {}

}
