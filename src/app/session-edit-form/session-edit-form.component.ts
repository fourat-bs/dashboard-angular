import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  editSession(sessionItem: any) {
    console.log(sessionItem);}

}
