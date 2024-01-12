import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModuleModule } from './product-module/product-module.module';
import { CustomerModuleModule } from './customer-module/customer-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ProductModuleModule,
    AppRoutingModule,CustomerModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
