import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
employee:Employee = new Employee();
id:number;
  constructor(private service:EmployeeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getOneEmployee(this.id).subscribe(data=>{ console.log(data);
     
    });
  }
    
  updateEmployee(){
    this.service.updateEmployee(this.employee).subscribe(data=>{console.log(data);this.router.navigate(['getallemployee'])})
  }

  }
  
  

