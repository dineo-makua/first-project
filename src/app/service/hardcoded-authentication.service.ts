import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { 
    //
  }

  authenticate(username:string, password:string){
    //console.log('before'+ this.isUserLoggedIn());
    if(username==='dineo@21' && password ==='dinny'){
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('afterthis'+ this.isUserLoggedIn());
      return true;
    }
    return false;

  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)


  }

  logout(){

    sessionStorage.removeItem('authenticaterUser')
  }
}
