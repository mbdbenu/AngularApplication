import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employee: Employee[];
  message: any;
  constructor(private service: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.service.getAllEmployee().subscribe( data => {
      //on success
      this.employee = data;
    },
    error => {
      //on fail
      console.log(error);
    })
  }

  deleteEmployee(id: number) {
    console.log('deleted' + id);
    this.service.deleteEmployee(id).subscribe(
      data => {
        console.log(data);
        this.message = data;
        this.getAllEmployees();
      },
      error => {
        console.log(error);
      }
    );
  }

  editEmployee(id:number){
    this.router.navigate(['edit',id]);
    }
   
}
