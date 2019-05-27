import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,private route: Router) { } //HttpClient came from library

  btnclickfromData(){
    return console.log("paisi");
  }

  getBlog(){
    return this.http.get('http://localhost:8000/api/posts');
  }

  getBlog1(){
    return this.http.get('http://localhost:8000/api/posts');
  }

  postBlog(d){                            //post-method from formdata in api
    return this.http.post('http://localhost:8000/api/posts',{
        "name" : d.name,
        "posts": d.message,
    })
    .subscribe(d =>{
    
      console.log("POST Request is successful ", d);
      this.route.navigateByUrl('/');
    },
    error  => {
    
      console.log("Error", error);
    
    });
    
    // return console.log(d.name);
  }

}