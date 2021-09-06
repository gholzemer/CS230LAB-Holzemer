import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './Cards/Cards.component';
import { FooterComponent } from './Footer/Footer.component';
import { GridComponent } from './Grid/Grid.component';

import { TopHeaderComponent } from './Header/TopHeader.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    CardsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
