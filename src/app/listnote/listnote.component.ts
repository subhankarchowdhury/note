import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-listnote',
  templateUrl: './listnote.component.html',
  styleUrls: ['./listnote.component.scss']
})
export class ListnoteComponent implements OnInit {
  notes!: Data[];
  update: boolean = false;
  newOrUpdateNote : Data = {
    userId: 1,
    id:112233,
    title:'',
    body:''
  }

  constructor(private dataService : DataService) { 
    
  }

  ngOnInit(): void {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res.reverse()
      //console.log(this.notes);
      
    })
  }

  updateNote(note:Data){
    this.newOrUpdateNote = note
    this.update = true
    
  }

  addNoteOrUpdateNote(note:Data){
    const isNotePresent = (x:Data) => x.id == note.id;
    var noteIndex = this.notes.findIndex(isNotePresent)
    //console.log(noteIndex,note.id);
    
    if (noteIndex === -1){
      console.log('adding new note');
      
      this.notes.unshift(note)
    }else{
      console.log('updating note');
      
      this.notes[noteIndex].title = note.title
      this.notes[noteIndex].body = note.body
    }
  }

  setUpdateFalse(status:boolean){
    this.update = status
  }

  deleteNote(note:Data){
    const isNotePresent = (x:Data) => x.id == note.id;
    var noteIndex = this.notes.findIndex(isNotePresent)
    this.notes.splice(noteIndex,1)
    
  }

  }

 
    

