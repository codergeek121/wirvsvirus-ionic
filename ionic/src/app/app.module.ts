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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FilterPopoverComponent],
  entryComponents: [FilterPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot({mode: 'ios', backButtonText: 'Zurück'}), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
