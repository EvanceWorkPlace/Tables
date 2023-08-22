import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../persons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  person: Person | any;

 constructor(private personService:PersonService,
  private location: Location,
  private route: ActivatedRoute){}

ngOnInit(){
 this.personService.getPeople();
}

goBack(): void{
  this.location.back()
}
}
