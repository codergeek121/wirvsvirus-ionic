import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-popover',
  templateUrl: './filter-popover.component.html',
  styleUrls: ['./filter-popover.component.scss'],
})
export class FilterPopoverComponent implements OnInit {
  supermarketTypes = [
    {val: "Supermarkt", id: 1, isChecked: true },
    {val: "Apotheke", id: 2, isChecked: false },
  ];

  constructor() {}

  ngOnInit() {}

}
