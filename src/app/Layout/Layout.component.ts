import { Component } from '@angular/core';
import { mock_TopCards } from '../TopCards/mock_TopCards';
import { TopCard } from '../TopCards/TopCard.model';




@Component({
selector: 'Layout',
templateUrl: 'Layout.component.html',
styleUrls: ['./Layout.component.css'],
styles: [`


`]
})


export class LayoutComponent {

    topcards:TopCard[] = [];

    constructor(){
        for(var topcards of mock_TopCards){
            this.topcards.push(new TopCard(topcards));
        }
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