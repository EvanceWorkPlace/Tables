import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from './persons';
//import  User  from '../student.json';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  setAddedUserData(user: Person | null) {
    this.addedUserDataSubject.next(user);
  }
  private showModalSubject = new BehaviorSubject<boolean>(false);
  public showModal$: Observable<boolean> = this.showModalSubject.asObservable();

  private addedUserDataSubject = new BehaviorSubject<Person | null>(null);
  public addedUserData$: Observable<Person | null> = this.addedUserDataSubject.asObservable();

  private currentPage = 0;
  private pageSize = 10; 
  public persondata: Person[] = [];

  constructor(private http: HttpClient) {}

  loadMoreData(): Observable<Person[]> {
    const url = `/api/users?page=${this.currentPage}&pageSize=${this.pageSize}`; // Adjust the URL
    return this.http.get<Person[]>(url);
  }
  // Method to determine whether more data can be loaded
  canLoadMoreData(): boolean {
    return this.persondata.length < (this.currentPage + 1) * this.pageSize;
  }

   // Increment the current page and return its value
   incrementPage(): number {
    this.currentPage++;
    return this.currentPage;
  }


  showAddStudentModal() {
    this.showModalSubject.next(true);
  }

  hideModal() {
    this.showModalSubject.next(false);
  }
 
  private addUserToPersonData(user: Person) {
    // Add the new user to the persondata array
    this.persondata.push(user);
  }
}