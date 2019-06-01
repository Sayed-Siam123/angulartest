import { Injectable, OnInit, OnDestroy } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrManager } from 'ng6-toastr-notifications';
import { globals } from './globals';


@Injectable({
  providedIn: 'root'
})
export class DataService{
  globals=globals;
  navigationSubscription;
  token: any;
  public d;
  Users: object;
  constructor(private http: HttpClient,private route: Router,private toastr: ToastrManager) {
    
  } //HttpClient came from library 

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



  getAdminBlog(){
    return this.http.get('http://localhost:8000/api/admin/posts');
  }
  getUserBlog(){
    return this.http.get('http://localhost:8000/api/user/posts');
  }
  getSuperAdminBlog(){
    return this.http.get('http://localhost:8000/api/super/posts');
  }
  getCommonUserBlog(){
    return this.http.get('http://localhost:8000/api/common/posts');
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

    return this.http.post('http://localhost:8000/api/createUser',{
        "name" : credential.name,
        "email": credential.email,
        "password": credential.password,
        "confirm_password": credential.confirm_password,
    })
    .subscribe(data =>{

      this.toastr.successToastr('Registration Successfull!', 'Success!',{
        toastTimeout: 3000,
        animate: 'slideFromBottom',
      });
      
      console.log("POST Request is successful ", data);
      console.log(credential.name);
      console.log(credential.email);
      console.log(credential.password);
      console.log(credential.confirm_password);

      return window.location.pathname = '/login';
    	// let myLocation = "/login";
	    // return location.path('/login');

      //return this.route.navigateByUrl('/login');
    },
    error  => {
    
      this.toastr.errorToastr(error.error.message, 'Sorry!',{
        toastTimeout: 3000,
        animate: 'slideFromBottom',
      });
      console.log("Error", error.error.message);
    
    });
    // return this.route.navigateByUrl('/');
  }

  login(credential){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer'+ 'dadadadadada' +globals.token,
      })
    };
    
    return this.http.post('http://localhost:8000/api/login',credential,httpOptions)
    .subscribe(data =>{
      
      this.toastr.successToastr('Login Successful!', 'Success!',{
        toastTimeout: 5000,
        animate: null,
      });

      // this.toastr.successToastr('Login Successful!','Success!');

      // Swal.fire({
      //   position: 'top-end',
      //   type: 'success',
      //   title: 'Login Successful!',
      //   showConfirmButton: false,
      //   timer: 1500
      // })

      localStorage.setItem('token',data.token);
      localStorage.setItem('id',data.user.id);
      localStorage.setItem('id_user_roles',data.user.id_user_roles);

      console.log(data);
      console.log(credential.email);
      console.log(credential.password);
      
      // return this.route.navigateByUrl('/login');

      // this.route.navigated = false;
      // return this.route.navigate(['/index']);

      return window.location.pathname = 'dashboard';
    	// let myLocation = "/index";
	    // return location.path(myLocation);

      //window.location('/index');


    },
    error  => {

      this.toastr.errorToastr(error.error.message, 'Error!',{
        toastTimeout: 5000,
        animate: 'slideFromBottom',
      });
    
      console.log("Error", error);
    
    });

    // console.log(credential.email);

  }

  

}