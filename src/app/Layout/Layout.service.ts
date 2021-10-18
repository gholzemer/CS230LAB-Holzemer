import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TopCard } from "../TopCards/TopCard.model";


@Injectable({providedIn: 'root'})
export class LayoutInfoService{
    


    constructor(private http:HttpClient){
        
    }

    getUserInfo(){
        return this.http.get<TopCard[]>('https://razer-75b9b-default-rtdb.firebaseio.com/LayoutPageCards.json');
    }
    

}