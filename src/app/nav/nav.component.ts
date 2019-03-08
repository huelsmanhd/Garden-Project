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

  logout=true;
  products = <any>[];
  ngOnInit() {
    
  }

  logOut() {
    sessionStorage.clear();
    
    
  }

}
