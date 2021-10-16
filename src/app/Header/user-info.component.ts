import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';


@Injectable()
@Component({
selector: 'UserInfo',
templateUrl: 'user-info.component.html'
//styleUrls: ['./user.component.css'],

})


export class userinfoComponent implements OnInit {
    myInfo: UserInfo | undefined;
    constructor(private http: HttpClient){
         
        
    }
    ngOnInit(): void{
        console.log("Sending get request to the server.");
        this.getUserInfo();
        console.log("Registering UserInfo as subscriber");
        this.showUserinfo();
    }

   

    getUserInfo(){
        return this.http.get<UserInfo>('https://razer-75b9b-default-rtdb.firebaseio.com/User-Info.json');
    }
    showUserinfo(){
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
            
        })
    }



}