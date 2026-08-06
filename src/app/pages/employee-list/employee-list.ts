import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../core/services/employee-service';
import { EmployeeModel } from '../../core/model/classes/Employee.Model';
import { ResponseModel } from '../../core/model/interfaces/Response.Model';
import { Observable, map } from "rxjs";
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, RouterOutlet, AsyncPipe, MatPaginatorModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})



export class EmployeeList {

  empService = inject(EmployeeService);
  empList$ : Observable<EmployeeModel[]> = new Observable<EmployeeModel[]>();
  employeesToShow$!: Observable<EmployeeModel[]>;
  empCount: number = 0;

 constructor(){
  this.empList$ = this.empService.onGetAllEmployees();
  this.updateTable();
  this.empList$.subscribe(employees => {
    this.empCount = employees.length;
  });
}

pageIndex = 0;
pageSize = 5;

ngOnInit() {
  this.updateTable();
}

changePage(event: PageEvent) {

  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;

  this.updateTable();

}
updateTable() {

  this.employeesToShow$ = this.empList$.pipe(

    map((employees) => {

      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;

      return employees.slice(start, end);

    })

  );

}

onDeleteEmployee(id:number){
 this.empService.onDeteleEmployeeById(id).subscribe({
  next(res:any) {
    if(res){
      alert("employee deleted")
    }else{
    alert(res.message)
    }
  },error(err) {
    alert(err.message + " Creo que es error de la API")
  },
 })
}
}


