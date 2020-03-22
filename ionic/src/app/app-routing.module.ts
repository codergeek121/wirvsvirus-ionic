import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScannerPage } from './scanner/scanner.page';
import { CodePage } from './code/code.page';
import { MarketDetailPage } from './market-detail/market-detail.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'market/:id', component: MarketDetailPage },
  { path: 'code', component: CodePage },
  { path: 'scanner', component: ScannerPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
