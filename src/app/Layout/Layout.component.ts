import { TopCard } from '../TopCards/TopCard.model';
//import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
//import { UserInfo } from '../Header/user-info.model';
import { LayoutInfoService } from './Layout.service';



@Component({
selector: 'Layout',
templateUrl: 'Layout.component.html',
styleUrls: ['./Layout.component.css'],
styles: [`


`]
})


export class LayoutComponent implements OnInit  {

    //topcards:TopCard[] = [];

    //topcards:TopCard[] = [];
    myCards: TopCard[] = [];
    constructor(private dataService: LayoutInfoService){
         
        
    }
    ngOnInit(): void{
        
        this.showUserinfo();
    }

  

    
    showUserinfo(){
        this.dataService.getUserInfo().subscribe((data: TopCard[]) => {
          for(var item in data){
            console.log(data[item]);
              this.myCards.push(data[item]);
            //this.myCards.push(new TopCard(myCards));
          }
            
        })
    }







    title = "Home";
    RIG:String = "RAZER ISKUR GAMING CHAIR";
    Intel:String = "INTEL GAMER DAYS FESTIVAL OF DEALS";
    
    D2:String = "To help you achieve perfect gaming form in front of your computer, the Razer Iskur range focuses on giving you full-range support that maintains your posture and minimizes muscle fatigue.";

    Add:String = "Add To Cart";
    LM:String = "Learn More";
    Misc:String = ">";
    B:String = "Buy";
    

}