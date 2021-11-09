import { componentFactoryName } from "@angular/compiler";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { authResponse } from "./authResponse";

@Component({
    selector: 'authComponent',
    templateUrl: 'auth.component.html',
})
export class authComponent{
    private authObservable!:Observable<authResponse>;
    public buttonClicked:string = "";

    public constructor(private authService:AuthService){
        
    }

    public onSubmit(form:NgForm){
        console.log("Submitted");
        
        if(this.buttonClicked == "SignUp"){
            this.authObservable = this.authService.signup(form.value.email, form.value.password);
            console.log("Sign Up Successful");
        }
        if(this.buttonClicked == "Login"){
            this.authObservable = this.authService.login(form.value.email, form.value.password);
            console.log("Login Successful");
        }

        this.authObservable.subscribe((data:authResponse) =>{
            console.log(data);
        },
        error=>{
            if(error.error.error.message == "INVALID_PASSWORD"){
                console.log(error.error.error.message); 
                alert("Invalid Password");
            }else{
                console.log(error.error.error.message); 
                alert("That Email Already Exists");
            }
           
            }
        );
        form.resetForm();
    }
    
   

}