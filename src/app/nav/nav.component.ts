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
    this.gardenService.sessionToken === "" ? this.logout === false : this.logout === true;
  }

  logOut() {
    sessionStorage.clear();
  }

}
