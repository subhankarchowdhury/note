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
  notes:Array<Data> = [];

  constructor(private dataService : DataService) { 
    this.notes = this.dataService.availableNotes
  }

  ngOnInit(): void {}
  }

 
    

