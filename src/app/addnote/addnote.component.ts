import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../data.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit, OnChanges{

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

  ngOnChanges(changes: any) {
    //console.log(changes.toBeUpdateNote);
    
    if(changes.toBeUpdateNote.currentValue.id === 112233){
        this.noteForm.get('noteTitle')?.setValue('')
        this.noteForm.get('noteBody')?.setValue('')
    }else{
        this.noteForm.get('noteTitle')?.setValue(changes.toBeUpdateNote.currentValue.title)
        this.noteForm.get('noteBody')?.setValue(changes.toBeUpdateNote.currentValue.body)
    }

  }


  onSubmitOrUpdate(){
    //console.log(this.isUpdate);
    
    if(this.isUpdate){
      //console.log('update called');
      
      //console.log(this.noteForm.get('noteTitle')?.value);
      
      this.sendNotes.emit({
        userId:this.toBeUpdateNote.userId,
        id:this.toBeUpdateNote.id,
        title:this.noteForm.get('noteTitle')?.value,
        body:this.noteForm.get('noteBody')?.value})
      
      this.sendUpdateOrSaveStatus.emit(false)
      console.log('updating');
      //this.noteForm.get('noteTitle')?.setValue('')
      //this.noteForm.get('noteBody')?.setValue('')
      this.noteForm.reset()
    }else{
      this.sendNotes.emit({
        userId:1,
        id:Date.now(),
        title:this.noteForm.get('noteTitle')?.value,
        body:this.noteForm.get('noteBody')?.value})
      
      this.sendUpdateOrSaveStatus.emit(false)
      this.noteForm.reset()
      }
    
  }

}
