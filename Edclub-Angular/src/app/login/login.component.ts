import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signupform:boolean = true;
  public details = { firstName:'', email:'', password:''};
  constructor(private loginservice : LoginserviceService) { }

  ngOnInit(): void {
  }

  signup()
  {
    this.signupform = true;
  }

  signin()
  {
    this.signupform = false;
  }

  createAcc()
  {
    console.log(this.details);
    this.loginservice.createAccount(this.details);
  }

}
