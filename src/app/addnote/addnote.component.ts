import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit{

  noteForm: FormGroup;

  constructor(){
    this.noteForm = new FormGroup({
      'noteTitle' : new FormControl(null, Validators.required),
      'noteBody' : new FormControl(null,  Validators.required)
    })
  }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.noteForm);

    
    
  }

}
