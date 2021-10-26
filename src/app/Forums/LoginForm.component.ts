import { Component, OnInit } from '@angular/core';
import { Bar } from './Bar.model';
import { BarService } from './Bar.service';

@Component({
selector: 'LoginForm',
templateUrl: 'LoginForm.component.html',
styleUrls: ['./LoginForm.component.css'],

})
export class loginFormComponent implements OnInit {
    UserInfo: Bar | undefined;
    
    constructor(private BarService:BarService){
        console.log(this.UserInfo);
    }
    
    ngOnInit(): void {
        console.log('Shwowing Data');
        
        this.BarService.getUserInfo().subscribe(data => {
            console.log(data);

        })
    }

    showUserInfo(){
        this.BarService.getUserInfo().subscribe(data => {
            console.log(data);
            this.UserInfo = data;
            
        })
    }

    onLoginForm(data : Bar){
        //console.log(data);
       
        
        this.BarService.editUserInfo(data).subscribe(data => {    
            console.log(data);
            
        })  
        this.UserInfo = data;
        if(this.UserInfo == undefined){
            console.log("asdasdasdasdasdasdasdasdasdasdasdadsasdasdasdasdasd");
        }
    }

    


}