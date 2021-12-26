import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { without } from 'lodash';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Wisdom Pets Medicine';
  theList: object[];

  deleteApt(theApt: object){
    this.theList = without(this.theList, theApt);
  }

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
      console.log(data);
    });
  }

}
