import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  message: any;
  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
  }
  createEmployee() {
    this.service.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.message = data;
      this.employee = new Employee();
    }, error => {
      console.log(error);
    }

    );
  }
}
