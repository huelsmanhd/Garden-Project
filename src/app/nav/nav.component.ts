import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { GardenService } from "../garden.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private gardenService: GardenService, private router: Router) { }

  sessionToken: string = "";

  logout=true;
  products = <any>[];
  ngOnInit() {
  }

  logoutView() {
    if(this.gardenService.sessionToken === '')
      return this.logout = false;
    else
      return this.logout = true;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate([""])
    
  }


}
