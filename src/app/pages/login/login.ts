import { Component, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    userName: '',
    password: ''
  };

  router = inject(Router);
  constructor(private http: HttpClient) {

  }

  onlogin(){
    this.http.post(environment.API_URL + "login", this.loginObj).subscribe({
      next: (res: any) => {
      
        if(res.result){
          alert('Login Success');
          this.router.navigateByUrl("/admin/dashboard");
          localStorage.setItem(environment.NAME,JSON.stringify(res.data));
        }else{
          alert(res.message);
        }
      }, error: (err) => {
        alert('API ERROR');
      }
    });
  }
}
