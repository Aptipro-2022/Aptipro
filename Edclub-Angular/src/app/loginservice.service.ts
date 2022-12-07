import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http : HttpClient, private router:Router) { }

  createAccount(details = { firstName: '', email:'', password:''})
  {
    return this.http.post('http://localhost:3000/login', details).subscribe(res => {
      console.log(res);
      var token = res;
      localStorage.setItem('token', JSON.stringify(token));
    })
  }
}
