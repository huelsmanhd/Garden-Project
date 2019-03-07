import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { GardenService } from "./garden.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


>>>>>>> aa8d4a571be9904596e7efbb91768b55a8d47707

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ProductsComponent,
<<<<<<< HEAD
    // HttpClientModule,
=======
>>>>>>> aa8d4a571be9904596e7efbb91768b55a8d47707
    LoginComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    FormsModule
  ],
  providers: [GardenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
