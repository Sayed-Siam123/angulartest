import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'index', component: HomeComponent},
  {path:'deup', component: AboutComponent},
  {path:'create', component: ContactComponent},
  {path:'**',redirectTo: '/'}, //its for otherwise of angularjs
];  //have to route component wise

// {path:'contact/:id', component: ContactComponent} if i need id based information!

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
