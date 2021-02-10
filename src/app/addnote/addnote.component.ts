import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit{

  noteForm: FormGroup;

  constructor(private dataService : DataService){
    this.noteForm = new FormGroup({
      'noteTitle' : new FormControl(null, Validators.required),
      'noteBody' : new FormControl(null,  Validators.required)
    })
  }

  ngOnInit(){
  }

  onSubmit(){
    this.dataService.createNote({
      userId:1,
      title:this.noteForm.get('noteTitle')?.value,
      body:this.noteForm.get('noteBody')?.value})

      this.noteForm.reset()
  }



}
