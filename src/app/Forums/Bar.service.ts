import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bar } from "./Bar.model";





@Injectable({providedIn: 'root'})
export class BarService{
    


    constructor(private http:HttpClient){
        
    }

    getUserInfo(){
        return this.http.get<Bar>('https://razer-75b9b-default-rtdb.firebaseio.com/LoginForm.json');
    }
    editUserInfo(data : Bar){
        return this.http.put('https://razer-75b9b-default-rtdb.firebaseio.com/LoginForm.json', data);
    }

}