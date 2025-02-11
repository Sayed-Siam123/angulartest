import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'; //http client module
import {ReactiveFormsModule,FormsModule} from '@angular/forms'; //angular form module for form manupulation
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'; //sweetalert module import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import {MyHttpInterceptor} from './my-http-interceptor';


//Page component descrived
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrdFilterPipe } from './grd-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GrdFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, //http import
    ReactiveFormsModule, //form module import
    FormsModule,
    SweetAlert2Module.forRoot(), //for importing sweetalert Swal
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
