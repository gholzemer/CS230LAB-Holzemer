import { Injectable } from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database'
import { Observable } from "rxjs";
import { TopCard } from "src/app/TopCards/TopCard.model";


@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<TopCard []>;
    constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase Communications");
        this.items = this.db.list<TopCard>('lifestylePage/LifestylePageCards').valueChanges();
        

        
    }

    public showData(){
        this.items.subscribe((data: TopCard[])=>{
            console.log("Data recieved");
            console.log("-- AngularFireBase Data Below --");
            for(let item of data){
                
                console.log(item);
                
            }
            console.log("-- End AngularFireBase Data --");
            //console.log(this.items);
        })
    }
    
}