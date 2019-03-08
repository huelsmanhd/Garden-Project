import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { GardenService } from "../garden.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  adminLogin: FormGroup;

  constructor(
    private gardenService: GardenService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.adminLogin = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    // this.gardenService.userLogin(this.adminLogin.value)
    console.log(this.adminLogin.value);
  }



}
