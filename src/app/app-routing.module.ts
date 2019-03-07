import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-root', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
