import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { ResponseModel } from '../model/interfaces/Response.Model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class MasterSrv {

 http = inject(HttpClient);

 onGetParentDepartments(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(environment.API_URL + environment.GET_ALL_PARENT_DEPARTMENTS);
  }

  onGetChildDepartmentsById(parentId: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(environment.API_URL + environment.GET_CHILD_DEPARTMENT + parentId);
  }
}
