import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
selector: 'AnimatedNavbar',
templateUrl: 'AnimatedNavbar.component.html',
styleUrls: ['./AnimatedNavBar.component.css'],
styles: [`


`]
})


export class AnimatedNavbarComponent implements OnInit{
    RIG:String = "RAZER ISKUR GAMING CHAIR";
    Intel:String = "INTEL GAMER DAYS FESTIVAL OF DEALS"
    
    D2:String = "To help you achieve perfect gaming form in front of your computer, the Razer Iskur range focuses on giving you full-range support that maintains your posture and minimizes muscle fatigue.";

    Add:String = "Add To Cart";
    LM:String = "Learn More";
    Misc:String = ">";
    B:String = "Buy";
    
    constructor(){
        console.log(AOS);
    }
    
    ngOnInit(){
        AOS.init();

    }

}