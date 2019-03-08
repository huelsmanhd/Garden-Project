import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GardenService } from "../garden.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private gardenService: GardenService) { }

  sessionToken: string = "";

  logout = true;

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
    this.logout = !this.logout;
  }


}
