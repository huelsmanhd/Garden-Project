import { Component, OnInit } from '@angular/core';
import { GardenService } from "../garden.service";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = <any>[];

  constructor(private gardenService: GardenService) { }

  ngOnInit() {
    this.gardenService.products().subscribe(data => {
      // console.log(data);
      this.products = data;
    })
  }

}
