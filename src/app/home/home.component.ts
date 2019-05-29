import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Users: object;
  Users1: object; //object creation

  constructor(private data: DataService) { } //DataService came from data.service.ts creation

  ngOnInit() {
    this.data.getBlog().subscribe(data => {
        this.Users = data;
        console.log(this.Users);
    })

    this.data.getBlog1().subscribe(data => {
      this.Users1 = data;
      console.log(this.Users1);
    }) //testing for multiple get method from multiple source

  }

  btnclick() {
    
    this.data.btnclickfromData();
  }

}
