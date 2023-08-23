import { Component,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormsModule, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from '../modal.service';


import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PersonService } from '../person.service';
import { Person } from '../persons';


@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css'],
  standalone:true,
   providers:[MatDialog],
  imports: [MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgIf,
    MatDialogModule, 
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  
})
export class AddUserDialogComponent {
  dataSource!: MatTableDataSource<Person>;
  newStudentForm: any;
  displayedColumns: string[] = ['id', 'name', 'surname', 'Email', 'Age', 'Del'];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  person: any[]=[]
  people: PersonService[] = [];
  newUser: any = {};
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  image = new FormControl('/assets/');
  userForm: FormGroup;
  
  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any ,  private formBuilder: FormBuilder,private modalService:ModalService){
    this.userForm = this.formBuilder.group({
      surname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      Email: ['', [Validators.required, Validators.email]],
    });
  }
 
  onSubmit() {
    // const newStudent: Person = {
    //   id: null, // Assign an appropriate ID here
    //   name: this.newStudentForm.controls['name'].value,
    //   surname: this.newStudentForm.controls['surname'].value,
    //   // Assign other form controls here...
    // };
    // Push the new user to the users array
    //TODO: have a process of sending the data once component is closed
            // console.log(this.newUser)
    //this.data.callback(this.newUser);
            // console.log("hit here " + JSON.stringify(this.people))
   // Emit the new user data
           
        // this.dialogRef.close({data: this.newUser} );
                this.modalService.setAddedUserData(this.newUser);
                this.dialogRef.close(this.userForm.value);
                this.dialogRef.close();
          

  }
  getErrorMessageS(){
    if (this.name.hasError('required')) {
      return 'You must enter a name';
      }
      return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  getErrorMessageN(){
    if (this.surname.hasError('required')) {
      return 'You must enter a surname';
      }
      return this.surname.hasError('surname') ? 'Not a valid surname' : '';
  }
  getErrorMessage() {
        if (this.email.hasError('required')) {
        return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}

