import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { EmployeeList } from './pages/employee-list/employee-list';
import { EmployeeForm } from './pages/employee-form/employee-form';
import { Proyects } from './pages/proyects/proyects';
import { ProyectsForm } from './pages/proyects-form/proyects-form';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'admin',
        component:Layout,
        children:[
            {
                path:'dashboard',
                component:Dashboard
            },
            {
                path:'employee-list',
                component:EmployeeList
            },
            {
                path:'new-employee/:id',
                component:EmployeeForm
            },
            {
                path:'proyects',
                component:Proyects
            },
            {
                path:'proyects/:id',
                component: ProyectsForm
            }
        ]
    }
];
