import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  basePath: string = 'http://localhost:9898/employee/app/rest/api/';

  constructor(private http: HttpClient) {


  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.basePath}getallemployee`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.basePath}/deleteemp/${id}`, { responseType: 'text' });
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.basePath}/saveemployee`, employee, { responseType: 'text' })
  }

  getOneEmployee(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.basePath}/edit/${id}`);
  }

  updateEmployee(employee:Employee):Observable<any>{
    return this.http.put(`${this.basePath}/update`,employee,{responseType : 'text'});
  }
}
