import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  Submitted= false;
  Success= false;

  constructor(private formbuilder: FormBuilder,private data: DataService) { 
    this.LoginForm = this.formbuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.email,])],
      password: [null,Validators.compose([Validators.required, Validators.minLength(3),])],
    })
  }

  onSubmit(credential){
    if(this.LoginForm.valid){
        this.Submitted= true;
        this.Success= true;
        Swal.fire(
          'Good Job!',
          'Registration Done',
          'success'
        )
        this.data.login(credential);
    }

    else{
      return;
    }
  }

  ngOnInit() {
  }

}
