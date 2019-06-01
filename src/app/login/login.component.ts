import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  Submitted= false;
  Success= false;
  auth_token: any;

  constructor(private formbuilder: FormBuilder,private data: DataService,private route: Router,private toastr: ToastrManager) { 
    this.LoginForm = this.formbuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email,])],
      password: [null,Validators.compose([Validators.required, Validators.minLength(3),])],
    })
  }

  onSubmit(credential){
    if(this.LoginForm.valid){
        this.Submitted= true;
        this.Success= true;
        this.data.login(credential);
    }

    else{
      return;
    }
  }

  ngOnInit() {
  }

}
