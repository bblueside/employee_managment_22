import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../core/model/interfaces/User.Model';
import { environment } from '../../../environments/environment';
import { Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isSideBarOpen: boolean = true;
  loggedUserData!: User; //?
  router = inject(Router);

  constructor() {
    const userData = localStorage.getItem(environment.NAME);
    if (userData) {
      this.loggedUserData = JSON.parse(userData);
    }
  }

  logout(){
    localStorage.removeItem(environment.NAME);
    this.router.navigate(['/login']);
  }
}

