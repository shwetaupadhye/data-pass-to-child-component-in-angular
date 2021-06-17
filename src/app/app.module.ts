import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Childcomponents1Component } from './childcomponents1/childcomponents1.component';
import { Childcompo2Component } from './childcompo2/childcompo2.component';
import { Childcomp3Component } from './childcomp3/childcomp3.component';

@NgModule({
  declarations: [
    AppComponent,
    Childcomponents1Component,
    Childcompo2Component,
    Childcomp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
