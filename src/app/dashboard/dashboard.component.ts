import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DataService } from '../data.service';
import {globals} from './globals';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public searchText : string;
  globals= globals;
  Users: object;

  constructor(private toastr: ToastrManager,private data: DataService) { }

  ngOnInit() {

    this.data.getAdminBlog().subscribe(data => {
      this.Users = data;
      
      // this.id = localStorage.getItem('id_user_roles');
      console.log(this.Users);
  })

  this.data.getUserBlog().subscribe(data => {
    this.Users = data;
    
    // this.id = localStorage.getItem('id_user_roles');
    console.log(this.Users);
  })

this.data.getSuperAdminBlog().subscribe(data => {
  this.Users = data;
  
  // this.id = localStorage.getItem('id_user_roles');
  console.log(this.Users);
  })

this.data.getCommonUserBlog().subscribe(data => {
  this.Users = data;
  
  // this.id = localStorage.getItem('id_user_roles');
  console.log(this.Users);
  })

    // this.toastr.successToastr('Login Successful!', 'Success!',{
    //   toastTimeout: 5000,
    //   animate: null,
    // });
  }

  btnclick() {
    
    this.data.btnclickfromData();
  
  }

}
