import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedNavbarComponent } from './AnimatedNavbar/AnimatedNavbar.component';


import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { CardsComponent } from './Cards/Cards.component';
import { FooterComponent } from './Footer/Footer.component';
import { GridComponent } from './Grid/Grid.component';

import { TopHeaderComponent } from './Header/TopHeader.component';
import { LayoutComponent } from './Layout/Layout.component';
import { CommunityComponent } from './Layouts/Community/Community.component';
import { consoleComponent } from './Layouts/console.component';
import { LifestyleComponent } from './Layouts/Lifestyle/Lifestyle.component';



import { mobileComponent } from './Layouts/Mobile/mobile.component';
import { PCComponent } from './Layouts/PC/PC.component';
import { ServicesComponent } from './Layouts/Services/Services.component';
import { SupprotComponent } from './Layouts/Support/Support.component';
import { LongCardsComponent } from './LongCards/LongCards.component';
import { NotificationNavBarComponent } from './NotificationNavBar/NotificationNavBar.component';
import { ShortCardComponent } from './ShortCard/ShortCard.component';
import { TestComponent } from './Test/Test.component';
import { TopCardsComponent } from './TopCards/TopCards.component';
import { HttpClientModule} from '@angular/common/http';
import { userinfoComponent } from './Header/user-info.component';
import { loginFormComponent } from './Forums/LoginForm.component';
import { FormsModule } from '@angular/forms';
//import { loginFormComponent } from './Forums/LoginForm.component';



@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    CardsComponent,
    GridComponent,
    LayoutComponent,
    TestComponent,
    TopCardsComponent,
    CommunityComponent,
    mobileComponent,
    ServicesComponent,
    LifestyleComponent,
    consoleComponent,
    SupprotComponent,
    PCComponent,
    NotificationNavBarComponent,
    AnimatedNavbarComponent,
    ShortCardComponent,
    LongCardsComponent,
    userinfoComponent,
    loginFormComponent


  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
