import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../persons';
@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent{
  people: any[] = [];
  constructor(private personService:PersonService){}
 
 ngOnInit(): void {
  this.people = this.personService.getPerson();
 }
  
}
