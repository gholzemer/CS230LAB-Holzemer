import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { TopHeaderComponent } from './Header/TopHeader.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
