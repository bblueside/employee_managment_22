import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ProyectsService } from '../../core/services/proyects-service';
import { Proyect } from "../../core/model/interfaces/Proyect.Model";
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-proyects',
  imports: [RouterLink, DatePipe],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css',
})
export class Proyects implements OnInit{

ProyectSrv = inject(ProyectsService)
proyectList = signal<Proyect[]>([])
@ViewChild('empModal') modalForm! : ElementRef; //? 


ngOnInit(): void {
  this.loadProyects();
}


loadProyects(){
  this.ProyectSrv.onGetProyects().subscribe({
    next:(res:Proyect[]) => {
      this.proyectList.set(res)
    }, error(err) {
      alert(err.message)
    },
  })

}

openEmpModal(){
  if(this.modalForm){
    this.modalForm.nativeElement.style.display = "block";
    this.modalForm.nativeElement.classList.add("show");
  }
}

closeEmpModal(){
  if(this.modalForm){
    this.modalForm.nativeElement.style.display = "none";
    this.modalForm.nativeElement.classList.remove("show");
  }
}





}
