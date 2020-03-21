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

  public markets = [
    { id: 1, name: "Laden 1", address: "Musterweg 1" },
    { id: 2, name: "Laden 2", address: "Musterweg 2" },
  ];

  plz = "";

  constructor(
    private backend: BackendService,
    private router: Router,
    private popoverController: PopoverController
    ) {}

  public startSearch() {
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
