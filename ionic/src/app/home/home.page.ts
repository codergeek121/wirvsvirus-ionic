import { Component } from '@angular/core';
import { BackendService, Store } from '../services/backend.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FilterPopoverComponent } from '../filter-popover/filter-popover.component';
import { StoreService } from '../services/store.service';
import { Observable, of, combineLatest } from 'rxjs';
import { delay, map, startWith, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl, Validators } from '@angular/forms';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  $filteredStores: Observable<Store[]>;
  searchbar: FormControl;

  constructor(
    private backend: BackendService,
    private router: Router,
    private popoverController: PopoverController,
    private storage: Storage,
    public storeService: StoreService
    ) {
      this.searchbar = new FormControl('', [
        Validators.maxLength(5)
      ]);
    }

  public startSearch() {
    this.backend.getStores().subscribe(result => {
			console.log(result)
    })

    this.router.navigate(["select-market"])
  }

  public refreshStores(event: any) {
    this.storeService.refresh();

    of(null).pipe(delay(2000)).subscribe(x => {
      event.target.complete();
    })
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
	
	ngOnInit(){
    this.$filteredStores = combineLatest(
      this.storeService.$stores,
      this.searchbar.valueChanges.pipe(
        startWith(""),
        distinctUntilChanged(),
        debounceTime(250)
      )
		).pipe(
			map(([stores, zip_code]) => {
        console.log(zip_code)
				return stores.filter(store => store.address.zip_code.startsWith(zip_code))
			})
		)

    this.storage.get("code").then(result => {
      console.log("mycode:");
      console.log(result);
    })
	}
}
