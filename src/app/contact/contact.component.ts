import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';
import {globals} from './globals';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  globals = globals;
  MessageForm: FormGroup;
  Submitted= false;
  Success= false;

  constructor(private formbuilder: FormBuilder,private data: DataService) { 
    this.MessageForm = this.formbuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(4),])],
      message: ['',Validators.required],
    })
    console.log(globals.id);
  }


  onSubmit(d){
      this.Submitted = true;
      if(this.MessageForm.invalid){
        return;
      }
      this.Success=true;
      console.log(d);
      this.data.postBlog(d);// passing data to data service
      Swal.fire(
        'Good job!',
        'Post Created!',
        'success'
      )
      

  }

  ngOnInit() {
    
  }

}