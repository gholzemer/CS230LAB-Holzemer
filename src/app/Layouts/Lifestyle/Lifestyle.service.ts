import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TopCard } from "src/app/TopCards/TopCard.model";


@Injectable({providedIn: 'root'})
export class LifestyleInfoService{
    


    constructor(private http:HttpClient){
        
    }

    getUserInfo(){
        return this.http.get<TopCard[]>('https://razer-75b9b-default-rtdb.firebaseio.com/lifestylePage/LifestylePageCards.json');
    }
    

}