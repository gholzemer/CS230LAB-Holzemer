import { Component } from '@angular/core';
import { mock_TopCards } from './mock_TopCards';
import { TopCard } from './TopCard.model';

@Component({
selector: 'mobile',
templateUrl: 'mobile.component.html',
styleUrls: ['./mobile.component.css'],
styles: [`


`]
})


export class mobileComponent {

    topcards:TopCard[] = [];

    constructor(){
        for(var topcards of mock_TopCards){
            this.topcards.push(new TopCard(topcards));
        }
    }
    RIG:String = "RAZER ISKUR GAMING CHAIR";
    Intel:String = "INTEL GAMER DAYS FESTIVAL OF DEALS"
    
    D2:String = "To help you achieve perfect gaming form in front of your computer, the Razer Iskur range focuses on giving you full-range support that maintains your posture and minimizes muscle fatigue.";

    Add:String = "Add To Cart";
    LM:String = "Learn More";
    Misc:String = ">";
    B:String = "Buy";
    

}