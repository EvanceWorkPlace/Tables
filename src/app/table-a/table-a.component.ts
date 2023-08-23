import { Component, OnInit,ViewChild } from '@angular/core';
import { PersonService } from '../person.service';
import { __importDefault } from 'tslib';
import {ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { Person } from '../persons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



import { ModalService } from '../modal.service';



@Component({
  selector: 'app-table-a',
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.css'],
 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableAComponent implements OnInit {
  people: any[]=[]; 
  numberOfUsersAdded: number = 0;
  editMode= false;
  newPerson: any = {};
  person: any;
  newStudentForm: any;
  isAddFormVisible: any;
  addedUser: Person | null = null;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor( 
  private personService: PersonService,
  private dialog: MatDialog,
  private modalService:ModalService){}
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'surname', 'Email', 'Age', 'image','Del'];

 
 ngOnInit():void {
  this.dataSource = new MatTableDataSource(this.people);
  this.modalService.addedUserData$.subscribe(data => {
    if (data) {
      this.addedUser = data;
      this.people.unshift(data);
      this.modalService.setAddedUserData(null);
      // Add a new column dynamically to the displayed columns
      const newColumn = `newColumn${this.numberOfUsersAdded + 1}`;
      // this.displayedColumns.push(newColumn);
      this.numberOfUsersAdded++;
    }
  });
                  this.people = this.personService.getPeople()
                  this.editMode = false;
                  this.newPerson = {}; 
                  this.dataSource.paginator = this.paginator;

 }
 loadData(){
  this.modalService.loadMoreData().subscribe(newData =>{
    this.people = this.people.concat(newData)
  });
 }
 loadMoreData(){
  if(this.modalService.canLoadMoreData())
  {
    this.modalService.incrementPage()
    this.loadData();
  }
 }

 openAddUserDialog() {
  
  const dialogRef = this.dialog.open(AddUserDialogComponent, {
    width: '400px',
    height:'600px',
    enterAnimationDuration: '1000ms',
    exitAnimationDuration: '1000ms',
    // Adjust the width as needed
  });

  dialogRef.afterClosed().subscribe(result => {

    console.log(result)
    
    const index =this.person.id.length+1; 
    if (result) { this.addNewStudent(result);
      // User clicked 'Add' in the dialog
      // callback:(newStudent:any)=>{ 
      // const newId = Math.max(...this.people.map(person => person.id)) + 1;
      // const newPerson = { ...newStudent, id: newId };
      // this.dataSource.data = this.people; 
      // this.people.push(newStudent)
      // this.people.unshift(newPerson);
      // const newColumn = `newColumn${this.numberOfUsersAdded + 1}`;
      // this.displayedColumns.push(newColumn);
      // this.numberOfUsersAdded++;
      // }
      callback:(newStudent:any)=>{ 
      const newColumn = `newColumn${this.numberOfUsersAdded + 10}`;
      this.displayedColumns.push(newColumn);
      this.numberOfUsersAdded++;} 

      const newId = Math.max(...this.people.map(person => person.id)) + index;
      const person = { ...this.newPerson, id: newId };
      this.people.unshift(person);   
    }  
    console.log(this.people)
  });

 }
addNewStudent(newStudent: any) {
  // Add the new student to the existing data
      this.people.push(newStudent);
  // Update the table data source
      this.dataSource.data = this.people;
      this.displayedColumns = [...this.displayedColumns];
}
toggleAddForm(){
  this.isAddFormVisible = !this.isAddFormVisible;
  if(!this.isAddFormVisible){
    this.newStudentForm.reset()
  }
}
editPerson(person: any) {
  this.editMode = true;
  this.newPerson = { ...person };
}
add(person: any) {
  this.people.push(person);
}
updatePerson() {
  const index = this.people.findIndex(person => person.id === this.newPerson.id);
  if (index !== -1) {
    this.people[index] = { ...this.newPerson };
  }
  this.editMode = false;
  this.newPerson = {};
}
cancelEdit() {
  // Reset editMode and newPerson
  this.editMode = false;
  this.newPerson = {};
}
onDelete(id: number) {
  // Delete the person from the people array or send an API request
  this.people = this.people.filter(person => person.id !== id);
}
// addNewStudent(newStudent: any) {
//   const newRowData = `New Row Data for User ${this.numberOfUsersAdded + 1}`;
//   const newUser = { ...newStudent, newRowData };
//   this.people.push(newUser);
//   this.dataSource = new MatTableDataSource(this.people);
// }
onSave(){
  this.modalService.hideModal()
}
onCancel(){
  this.modalService.hideModal()
} 
}



