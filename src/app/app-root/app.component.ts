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

  addApt(theApt: object){
    this.theList.unshift(theApt);
  }

  deleteApt(theApt: object){
    this.theList = without(this.theList, theApt);
  }

  searchApt(theQuery:string){
    this.theList = this.theList.filter(eachItem => {
      return (
        eachItem['petName'].toLowerCase().includes(theQuery.toLowerCase()) ||
        eachItem['ownerName'].toLowerCase().includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes'].toLowerCase().includes(theQuery.toLowerCase())
      );
    })
  }

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
      console.log(data);
    });
  }

}
