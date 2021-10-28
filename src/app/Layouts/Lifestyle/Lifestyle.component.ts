import { Component } from '@angular/core';
import { LifestyleInfoService } from './Lifestyle.service';
//import { mock_TopCards } from './mock_TopCards';
import { TopCard } from "src/app/TopCards/TopCard.model";
import { DatabaseService } from 'src/app/Layouts/Lifestyle/database.service';

@Component({
selector: 'Lifestyle',
templateUrl: 'Lifestyle.component.html',
styleUrls: ['./Lifestyle.component.css'],
styles: [`


`]
})


export class LifestyleComponent {
    
    myCards: TopCard[] = [];
    constructor(private dataService: LifestyleInfoService, private dbService:DatabaseService){
        
        
    }
    ngOnInit(): void{
        this.dbService.showData();
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


    RIG:String = "RAZER ISKUR GAMING CHAIR";
    Intel:String = "INTEL GAMER DAYS FESTIVAL OF DEALS"
    
    D2:String = "To help you achieve perfect gaming form in front of your computer, the Razer Iskur range focuses on giving you full-range support that maintains your posture and minimizes muscle fatigue.";

    Add:String = "Add To Cart";
    LM:String = "Learn More";
    Misc:String = ">";
    B:String = "Buy";
    

}