import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  Userbyid: object;
  SearchForm: FormGroup;
  UpdateForm: FormGroup;
  Submitted= false;
  Success= false;

  SubmittedUP= false;
  SuccessUP= false;

  constructor(private formbuilder: FormBuilder,private data: DataService) { 
    this.SearchForm = this.formbuilder.group({
      search_id: [null, Validators.required],
    })

    this.UpdateForm = this.formbuilder.group({
      message: [null, Validators.required],
    })
  }

  onSearch(id){
    
      if(this.SearchForm.valid){
        this.Submitted = true; //bool check
        this.Success=true;
        // console.log(id);
       return this.data.getBlogbyid(id).subscribe(data=>{
            this.Userbyid = data;
            console.log(this.Userbyid); //html e data niye jawar jonne
        })
      }
      else{
        return;
      } 
  }

  onUpdate(id,message){
    if(this.UpdateForm.valid){

      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, edit it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          
          //updating work start here
          this.SubmittedUP = true;
          this.SuccessUP=true; 
          this.data.updateBlogbyid(id.search_id,message.message); //data.service.ts e gese
          //end here

          Swal.fire(
            'Edited!',
            'Your File is edited.',
            'success'
          )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Editing cancelled. :)',
            'error'
          )
        }
      })
      
    }
    else{
      return;
    }
  }

  delete(id){
    if(this.SearchForm.valid){

      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          
          //Start here
          this.Submitted = true;
          this.Success=true;
          this.data.deleteBlogbyid(id.search_id); //data.service.ts e gese
          //Ends here

          Swal.fire(
            'Deleted!',
            'Your File is Deleted.',
            'success'
          )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Deleteing cancelled. :)',
            'error'
          )

        }

      })

    }
    else{
      return;
    }
  }

  ngOnInit() {
  }

}