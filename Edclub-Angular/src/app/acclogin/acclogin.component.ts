import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-acclogin',
  templateUrl: './acclogin.component.html',
  styleUrls: ['./acclogin.component.css']
})
export class AccloginComponent implements OnInit {

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

  login () {}
}
