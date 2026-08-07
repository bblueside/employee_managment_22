import { Component, inject, OnInit, signal} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router} from '@angular/router';
import { Observable } from "rxjs";
import { CreateProyect, Proyect } from "../../core/model/interfaces/Proyect.Model";
import { EmployeeModel } from "../../core/model/classes/Employee.Model"
import { ProyectsService } from '../../core/services/proyects-service';
import { EmployeeService } from '../../core/services/employee-service';


@Component({
  selector: 'app-proyects-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './proyects-form.html',
  styleUrl: './proyects-form.css',
})
export class ProyectsForm implements OnInit {

projectForm! : FormGroup;
ProyectSrv = inject(ProyectsService);
EmpServ = inject(EmployeeService);
empList = signal<EmployeeModel[]>([]);
router = inject(Router);


ngOnInit(): void {
   this.onGetAllEmployees();
}

constructor(){
  this.initializeForm();
  
}

initializeForm(){
  this.projectForm = new FormGroup({
  projectId: new FormControl(0),
  projectName: new FormControl(""),
  clientName: new FormControl(""),
  startDate: new FormControl(Date),
  leadByEmpId: new FormControl(0),
  contactPerson: new FormControl(""),
  contactNo: new FormControl(""),
  emailId: new FormControl("")
  })
}

saveProyect(){
  const formValue : CreateProyect = this.projectForm.value;
  this.ProyectSrv.onCreateProyects(formValue).subscribe({
    next: (res: CreateProyect) =>{
      if(res){
        alert("Project created succesfully!")
        this.router.navigateByUrl("/admin/proyects")
      }else{
        alert("error")
      }
    }, error(err) {
      alert(err.message)
    },
  })
  

}

onGetAllEmployees(){
this.EmpServ.onGetAllEmployees().subscribe({
    next: (res:EmployeeModel[]) => {
      if(res){
        this.empList.set(res)
      }else{
        alert("Error")
      }
    }, error(err) {
      alert(err.message)
    },
   })
}
}
