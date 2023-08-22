import { Injectable } from '@angular/core';
import persondata from'../assets/user.json';
@Injectable({
  providedIn: 'root'
})
export class PersonService{

constructor(){}
getPeople(){
 console.log(persondata.Person)
  return persondata.Person;
 
}

}
