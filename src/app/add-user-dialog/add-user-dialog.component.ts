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
  displayedColumns: string[] = ['id', 'name', 'surname', 'Email', 'Age', 'Del'];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  person: any[]=[]
  people: PersonService[] = [];
  newUser: any = {};
  email = new FormControl('', [Validators.required, Validators.email]);
  image = new FormControl('/assets/');
  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any ,  private formBuilder: FormBuilder,private modalService:ModalService){}
  onSubmit() {
    // Push the new user to the users array
    //TODO: have a process of sending the data once component is closed
    console.log(this.newUser)
    //this.data.callback(this.newUser);
    console.log("hit here " + JSON.stringify(this.people))
   // Emit the new user data
   this.modalService.setAddedUserData(this.newUser);
        // this.dialogRef.close({data: this.newUser} );
        this.dialogRef.close();
        this.modalService.hideModal();
  }
  onCancel() {
        this.dialogRef.close();
        this.modalService.hideModal();
  }
  getErrorMessage() {
        if (this.email.hasError('required')) {
        return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
