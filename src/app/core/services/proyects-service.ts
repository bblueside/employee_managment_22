import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { CreateProyect, Proyect } from "../model/interfaces/Proyect.Model";


@Injectable({
  providedIn: 'root',
})
export class ProyectsService {

  http = inject(HttpClient);

  onGetProyects():Observable<Proyect[]>{
    return this.http.get<Proyect[]>(environment.API_URL + environment.GET_ALL_PROYECTS)
  }

  onCreateProyects(proyectObj: CreateProyect):  Observable<CreateProyect>{
    return this.http.post<CreateProyect>(environment.API_URL + environment.CREATE_PROYECT, proyectObj)
  }

  

}
