import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './Cards/Cards.component';
import { FooterComponent } from './Footer/Footer.component';
import { GridComponent } from './Grid/Grid.component';

import { TopHeaderComponent } from './Header/TopHeader.component';
import { LayoutComponent } from './Layout/Layout.component';
import { TestComponent } from './Test/Test.component';
import { TopCardsComponent } from './TopCards/TopCards.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    CardsComponent,
    GridComponent,
    LayoutComponent,
    TestComponent,
    TopCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
