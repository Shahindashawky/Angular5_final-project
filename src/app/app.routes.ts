import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

export const master_routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignUpComponent}
];