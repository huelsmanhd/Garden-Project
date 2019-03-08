import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { GardenService } from "../garden.service";
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  adminLogin: FormGroup;



  constructor(
    private gardenService: GardenService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.adminLogin = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    
    console.log(this.adminLogin.value, this.adminLogin.value.email, this.adminLogin.value.password);
    fetch(`https://efa-gardenapp-backend.herokuapp.com/api/auth/login`, {
      method:"POST",
      body: JSON.stringify({
        email: this.adminLogin.value.email,
        password: this.adminLogin.value.password
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(res => res.json())
    .then(json => {
      this.storeSession(json.loggedInUser, json.token)
      this.router.navigate([""])
    })
  }

  storeSession({ role }, token) {
        sessionStorage.setItem('role', role)
        sessionStorage.setItem('token', token)
        this.gardenService.setSessionToken(token);
      }


}
