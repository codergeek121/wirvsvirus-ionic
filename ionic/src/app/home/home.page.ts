import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FilterPopoverComponent } from '../filter-popover/filter-popover.component';

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
    private router: Router,
    private popoverController: PopoverController
    ) {}

  public startSearch() {
    console.log(this.supermarketTypes)
    console.log(this.plz)
    this.backend.getStores().subscribe(result => {
			console.log(result)
    })

    this.router.navigate(["select-market"])
  }

  async showFilterPopover(ev: any) {
    const filterPopover = await this.popoverController.create({
      component: FilterPopoverComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    })

    return await filterPopover.present();
  }
}
