import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { EmployeeModel } from "../model/classes/Employee.Model";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService{

    http = inject(HttpClient);
    
    constructor(){

    }

    // Observable --> async
    onCreateEmployee(employeeObj: EmployeeModel): Observable<EmployeeModel>{
        return this.http.post<EmployeeModel>(environment.API_URL + environment.CREATE_EMPLOYEE, employeeObj);
    }

    onGetAllEmployees(): Observable<EmployeeModel[]>{
        return this.http.get<EmployeeModel[]>(environment.API_URL + environment.CREATE_ALL_EMPLOYEE);
    }

    onGetEmployeeById(id: number): Observable<EmployeeModel>{
        return this.http.get<EmployeeModel>(environment.API_URL + environment.GET_EMPLOYEE_BY_ID + id);
    }

    onUpdateEmployeeById(id: number ,employeeObj: EmployeeModel): Observable<EmployeeModel>{
        return this.http.put<EmployeeModel>(environment.API_URL + environment.UPDATE_EMPLOYEE_BY_ID + id, employeeObj);
    }
    
    onDeteleEmployeeById(id: number): Observable<EmployeeModel>{
        return this.http.delete<EmployeeModel>(environment.API_URL + environment.DELETE_EMPLOYEE_BY_ID + id);
    }

}
