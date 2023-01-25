import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoLayoutComponent } from './automobileTest/auto-layout/auto-layout.component';
import { CartComponent } from './automobileTest/cart/cart.component';
import { VehicleDetailComponent } from './automobileTest/vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './automobileTest/vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoLayoutComponent,
    CartComponent,
    VehicleDetailComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
