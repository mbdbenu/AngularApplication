import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  { path: 'getallemployee', component: ListEmployeeComponent },
  { path: 'saveemployee', component: CreateEmployeeComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: '', redirectTo: 'getallemployee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
