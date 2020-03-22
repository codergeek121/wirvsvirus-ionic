import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreComponent } from './components/store/store.component';
import { ScannerPage } from './scanner/scanner.page';
import { HomePage } from './home/home.page';
import { MarketDetailPage } from './market-detail/market-detail.page';
import { CodePage } from './code/code.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent,
    FilterPopoverComponent,
    StoreComponent,
    HomePage,
    MarketDetailPage,
    CodePage,
    ScannerPage],
  entryComponents: [FilterPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot({mode: 'ios', backButtonText: 'Zurück'}), AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), IonicStorageModule.forRoot({name: "data", driverOrder: ['localstorage']})],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
