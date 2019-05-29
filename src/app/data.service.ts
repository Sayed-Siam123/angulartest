import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrManager } from 'ng6-toastr-notifications';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,private route: Router,private toastr: ToastrManager) { } //HttpClient came from library

  btnclickfromData(){

    // swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You will not be able to recover this imaginary file!',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {
    //     swal.fire(
    //       'Deleted!',
    //       'Your imaginary file has been deleted.',
    //       'success'
    //     )
    //   // For more information about handling dismissals please visit
    //   // https://sweetalert2.github.io/#handling-dismissals
    //   } else if (result.dismiss === swal.DismissReason.cancel) {
    //     swal.fire(
    //       'Cancelled',
    //       'Your imaginary file is safe :)',
    //       'error'
    //     )
    //   }
    // })

    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )

    // Swal.fire({
    //   position: 'top-end',
    //   type: 'success',
    //   title: 'Login Successfull',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    // this.toastr.successToastr('This toast will dismiss in 10 seconds.', null, {toastLife: 10000});
    this.toastr.successToastr('Hello world!', 'Success!',{
      toastTimeout: 3000,
      animate: 'slideFromBottom',
    });
    
  }

  getBlog(){
    return this.http.get('https://www.api.cloudhawkit.com/api/posts');
  }

  getBlog1(){
    return this.http.get('https://www.api.cloudhawkit.com/api/posts');
  }

  postBlog(data){                            //post-method from formdata in api
    return this.http.post('https://www.api.cloudhawkit.com/api/posts',{
        "name" : data.name,
        "posts": data.message,
    })
    .subscribe(data =>{
    
      console.log("POST Request is successful ", data);
      this.route.navigateByUrl('/index');
    },
    error  => {
    
      console.log("Error", error);
    
    });
    
    // return console.log(data.name);
  }

  getBlogbyid(id){
    return this.http.get('https://www.api.cloudhawkit.com/api/posts/'+id.search_id);
    // return console.log(d.search_id);
  }

  updateBlogbyid(id,message){
    return this.http.put('https://www.api.cloudhawkit.com/api/posts/'+id,{
      "posts": message,      
    })
    
    .subscribe(message =>{
    
      console.log("PUT Request is successful ", message);
      this.route.navigateByUrl('/index');
    },
    error  => {
    
      console.log("Error", error);
    
    });
    // return console.log(d,m);
  }

  deleteBlogbyid(id){
    return this.http.delete('https://www.api.cloudhawkit.com/api/posts/'+id).subscribe(id=>{
      this.route.navigateByUrl('/index');
    });
  }

  register(credential){
    console.log(credential.username);
    console.log(credential.password);
    return console.log(credential.confirm_password);
    // return this.route.navigateByUrl('/');
  }

  login(credential){
    console.log(credential.username);
    return console.log(credential.password);
  }

}