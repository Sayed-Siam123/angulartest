import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  Submitted= false;
  Success= false;

  constructor(private formbuilder: FormBuilder,private data: DataService,private route: Router) { 
    this.RegisterForm = this.formbuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email,])],
      password: [null,Validators.compose([Validators.required, Validators.minLength(3),])],
      confirm_password: [null,Validators.compose([Validators.required, Validators.minLength(3),])],
    })
  }

  createUser(credential){
    if(this.RegisterForm.valid){
      this.Submitted = true;
      this.Success=true;
      if(credential.password!=credential.confirm_password){
        credential.email = "";
        credential.password = "";
        Swal.fire(
          'Error!',
          'Password and confrim password doesnt match!',
          'warning'
        )
      
      }
      
      else{
        this.data.register(credential);
        this.RegisterForm.setValue(null,{

        });
        // credential.email = "";
        // credential.password = "";
        // credential.confirm_password = "";
      }
    }
    else{
      return;
    }
    
  }

  //Validators.compose([Validators.required, Validators.minLength(4),])

  ngOnInit() {
  }

}
