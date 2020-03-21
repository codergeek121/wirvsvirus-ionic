import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMarketPageRoutingModule } from './select-market-routing.module';

import { SelectMarketPage } from './select-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMarketPageRoutingModule
  ],
  declarations: [SelectMarketPage]
})
export class SelectMarketPageModule {}
