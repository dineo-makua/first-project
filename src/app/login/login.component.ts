import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'dineo@21'
  password = ''
  errorMessage  = 'Invalid Credentials' 
  invalidLogin =false
   //dependency injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService){}

  ngOnInit() {
      
    
      
  }

  handleLogin(){

    
    // console.log(this.username);
    //   console.log(this.password);
    // if(this.username==='dineo@21' && this.password ==='dinny')
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      // Redirect to welcom
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }else
    {
      this.invalidLogin = true
    }
  }
}
