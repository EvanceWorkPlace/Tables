import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableAComponent } from './table-a/table-a.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';





@NgModule({ 
  declarations: [
    AppComponent,
    TableComponent,
    NavTopComponent,
    TableAComponent,  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    ScrollingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    AddUserDialogComponent,
    MatDividerModule,
    MatDividerModule, 
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatPaginatorModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    AddUserDialogComponent,
    HttpClientModule
   




  
    
  ],
  entryComponents: [AddUserDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
