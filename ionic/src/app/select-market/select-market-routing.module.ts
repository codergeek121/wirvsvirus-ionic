import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMarketPage } from './select-market.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMarketPageRoutingModule {}
