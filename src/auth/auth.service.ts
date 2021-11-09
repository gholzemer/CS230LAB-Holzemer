import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { authResponse } from "./authResponse";




@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private baseURl:string  = "https://identitytoolkit.googleapis.com/v1/accounts";
    private signUpEnd:string = "signUp";
    private signInEnd:string = "signInWithPassword";
    public constructor(private http:HttpClient){

    }
    public signup(email:string, password:string){
        const requestBody = {
           "email": email,
            "password":password,
            "returnSecureToken":true
        };
        return this.http.post<authResponse>(this.baseURl + ':' + this.signUpEnd + '?' + 'key=' + environment.firebaseConfig.apiKey, requestBody);
    }

    public login(email:string, password:string){
        const requestBody = {
            "email": email,
             "password":password,
             "returnSecureToken":true
         };

         return this.http.post<authResponse>(this.baseURl + ':' + this.signInEnd + '?' + 'key=' + environment.firebaseConfig.apiKey, requestBody);

        
    }
}