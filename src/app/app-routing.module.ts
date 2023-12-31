import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
{path: 'login', component:LoginComponent},
{path: 'signup', component:SignupComponent},
{path: 'dashboard', component:DashboardComponent},
{path: 'product-details/:id', component: ProductDetailsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
