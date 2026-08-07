import { Component, inject, OnInit, signal } from '@angular/core';
import { ProyectsService } from '../../core/services/proyects-service';
import { Observable } from "rxjs";
import { Proyect } from "../../core/model/interfaces/Proyect.Model";
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-proyects',
  imports: [RouterLink, DatePipe],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css',
})
export class Proyects implements OnInit{

ProyectSrv = inject(ProyectsService)
proyectList = signal<Proyect[]>([])

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


}
