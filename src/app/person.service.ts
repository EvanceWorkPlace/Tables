import { Injectable, OnInit } from '@angular/core';

import persondata from'../assets/user.json';



@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit{
  // ngOnInit(): void {
  //   this.getPerson();
  // }
  // constructor(){ }
  // getPeople(): Observable<Person[]>{
  //   const person = of(People);
  //   return person;
  // }
  // getPerson(){
  //   const per = this.person.find((person: any)=> person.id === person.id)!;
  //   return per;
  // }

  getPerson(){
    return persondata.Person;
  }

  ngOnInit(): void {
      this.getPerson();
  }


}
