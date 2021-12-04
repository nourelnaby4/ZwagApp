import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytodosComponent } from './mytodos/mytodos.component';
import { ValueComponent } from './value/value.component';

@NgModule({

  declarations: [

    AppComponent,
    MytodosComponent,
      ValueComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
