import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../data.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit{

  noteForm: FormGroup;
  @Input() isUpdate !: boolean
  @Input() toBeUpdateNote !: Data
  @Output() sendNotes = new EventEmitter<Data>()
  @Output() sendUpdateOrSaveStatus = new EventEmitter<boolean>()

  constructor(private dataService : DataService){
    this.noteForm = new FormGroup({
      'noteTitle' : new FormControl(null, Validators.required),
      'noteBody' : new FormControl(null,  Validators.required)
    })

  }

  ngOnInit(){      
  }


  onSubmitOrUpdate(){
    //console.log(this.isUpdate);
    
    if(this.isUpdate){
      console.log(this.noteForm.get('noteTitle')?.value);
      
      this.sendNotes.emit({
        userId:this.toBeUpdateNote.userId,
        id:this.toBeUpdateNote.id,
        title:this.noteForm.get('noteTitle')?.value,
        body:this.noteForm.get('noteBody')?.value})
      
      this.sendUpdateOrSaveStatus.emit(false)
    }else{
      this.sendNotes.emit({
        userId:1,
        id:Date.now(),
        title:this.noteForm.get('noteTitle')?.value,
        body:this.noteForm.get('noteBody')?.value})
      
      this.sendUpdateOrSaveStatus.emit(false)
    }

    this.noteForm.reset();
    
  }




}
