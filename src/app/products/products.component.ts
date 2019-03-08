import { Component, OnInit } from '@angular/core';
import { GardenService } from "../garden.service";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = <any>[];
  isLoggedIn = true;

  constructor(private gardenService: GardenService) { }

  ngOnInit() {
    this.gardenService.products().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

  showDelete() {
    if(this.gardenService.sessionToken === '')
      return this.isLoggedIn = false;
    else
      return this.isLoggedIn = true;
  };

  delete(product) {
    let token = this.gardenService.sessionToken;
    console.log(product);
    console.log(token)
    fetch(`https://efa-gardenapp-backend.herokuapp.com/api/product/${product}`, {
      method:"DELETE",
      body: JSON.stringify({ log: {id: product}
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": token
      })
    })
    .then(res => res.json())
    .then(() => this.ngOnInit());
    
  }
  }
