export interface authResponse {
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localID:string,
    registered?:boolean;

}