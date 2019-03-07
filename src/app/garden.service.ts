import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from "./models/adminModel";
import { map } from "rxjs"


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}


@Injectable({
  providedIn: 'root'
})
export class GardenService {
  adminURL = `https://efa-gardenapp-backend.herokuapp.com/api/auth/login`;

  sessionToken: string = "";

  constructor(private http: HttpClient) { }

  products() {
    return this.http.get(`https://efa-gardenapp-backend.herokuapp.com/api/product`);
  }

  // userLogin(adminLogin) {
  //   return this.http.post<any>(`${this.adminURL}`, { adminLogin })
  //   .pipe(user=> {
  //     if(user && user.token) {
  //       localStorage.setItem({token: user.token});
  //       this.sessionToken = user.token;
  //       console.log(this.sessionToken);
  //     }
  //   })
  // }

}


// Credentials:
// Products: https://efa-gardenapp-backend.herokuapp.com/api/product
// Admin: https://efa-gardenapp-backend.herokuapp.com/api/auth/login
// Admin Email (Options): 
//   atyler@gmail.com
//   mcook@gmail.com
//   mhowell@gmail.com
//   twest@gmail.com
//   vray@gmai.com
// Admin Password: test

// This does not need to be deployed.
