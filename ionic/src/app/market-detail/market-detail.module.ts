import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketDetailPageRoutingModule } from './market-detail-routing.module';

import { MarketDetailPage } from './market-detail.page';
import { StoreComponent } from '../components/store/store.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketDetailPageRoutingModule
  ],
  declarations: [MarketDetailPage, StoreComponent]
})
export class MarketDetailPageModule {}
