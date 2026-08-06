import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EmployeeModel } from '../../core/model/classes/Employee.Model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee-service';
import { MasterSrv } from '../../core/services/master-srv';
import { ChildDeptModel, ParentDeptModel } from '../../core/model/interfaces/Dept.Model';
import { ResponseModel } from '../../core/model/interfaces/Response.Model';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit {

router = inject(Router);
activateRoute = inject(ActivatedRoute);
EmployeeObj : EmployeeModel = new EmployeeModel();
empService = inject(EmployeeService);
masterService = inject(MasterSrv);
parentDeptList : WritableSignal<ParentDeptModel[]> = signal([]);
childDeptList : WritableSignal<ChildDeptModel[]> = signal([]);
currentEmployeeId : number = 0;

ngOnInit() {
  this.activateRoute.params.subscribe(
    {
      next:(res:any)=>{
        this.currentEmployeeId = res.id;
        if(this.currentEmployeeId > 0){
          this.onGetEmployeeById(this.currentEmployeeId);
        }
      }
    }
  )
 this.ongetParentDep();
}

ongetParentDep(){
  this.masterService.onGetParentDepartments().subscribe({
    next: (res: ResponseModel) => {
      if(res){
        this.parentDeptList.set(res.data);
      }else{
        alert("ERROR");
      }
    }, error : (err) => {
      alert('Error en la API');
    }
  })
}

onChangeParentDept(event: any){
  this.masterService.onGetChildDepartmentsById(event.target.value).subscribe({
    next: (res: ResponseModel) => {
      if(res){
        this.childDeptList.set(res.data);
      }else{
        alert("ERROR");
      }
    }, error : (err) => {
      alert('Error en la API');
    }
  })
}

onCreateEmployee(){
  this.empService.onCreateEmployee(this.EmployeeObj).subscribe({
    next: (res: any) => {
      if(res){
        alert('Empleado creado con éxito');
        this.router.navigateByUrl("/admin/employee-list");
      }else{
        alert(res.message);
      }
    }, error: (err) => {
      alert('Error en la API');
    }
  });
}

onGetEmployeeById(id: number){
  this.empService.onGetEmployeeById(id).subscribe({
    next: (res: EmployeeModel) => {
      if(res){
        this.EmployeeObj = res;
      }else{
        alert("ERROR");
      }
    }, error: (err) => {
      alert('Error en la API');
    }
  });
  
}

onUpdateEmployee(Employee: EmployeeModel){
this.empService.onUpdateEmployeeById(this.currentEmployeeId, Employee).subscribe({
  next: (res: any)=>{
    alert("Operación hecha")
  }, error (err){
    alert(err.message)
  }
});
}


}
