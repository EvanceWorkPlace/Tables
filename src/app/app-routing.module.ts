import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableAComponent } from './table-a/table-a.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [{path:'table',component:TableComponent
},
{path:'',component:TableAComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
