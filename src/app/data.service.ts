import { Injectable, OnInit } from '@angular/core';
import {Data} from './data.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/posts '
  public availableNotes : Data[]


  constructor(private http : HttpClient) {
    this.availableNotes = [] 
    this.http.get<Data[]>(this.url).subscribe(response => {
      this.availableNotes = response
      //console.log(this.availableNotes);
      
    })
  }

  getNotes(){
    //return this.availableNotes
    return this.http.get<Data[]>(this.url)
  }

  // createNote(note:Data){
  //   //console.log(note);
    
  //   this.availableNotes.unshift(note)
  // }
}

