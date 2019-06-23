import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {globals} from './globals';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  globals= globals;

  appTitle: String= 'ANGULAR CURD R&D';

  constructor(private route: Router,private toastr: ToastrManager) { }

  logout(){
    this.toastr.successToastr('Logout Successful', 'Success!',{
      toastTimeout: 3000,
      animate: 'slideFromBottom',
    });
	  localStorage.removeItem("token");
	  localStorage.removeItem("id");
	  localStorage.removeItem("id_user_roles");
      localStorage.clear();
      
      window.location.pathname = '';
    
      console.log("paisi");


  }

  ngOnInit() {
  }

}
