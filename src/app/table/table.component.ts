import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
 people: any[] = [];
 constructor(private personService:PersonService){}

ngOnInit(): void {
 this.people = this.personService.getPerson();
}
}
