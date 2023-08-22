import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableAComponent } from './table-a/table-a.component';
import { TableComponent } from './table/table.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SomeOtherComponent } from './some-other/some-other.component';

const routes: Routes = [{path:'table',component:TableComponent
},
{path:'',component:TableAComponent},{path:'add',component:AddFormComponent},
{path:'some',component:SomeOtherComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
