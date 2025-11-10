import { Routes } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Profile } from './profile/profile';
import { Register } from './register/register';
import { Contact } from './contact/contact';
import { Login } from './login/login';


export const routes: Routes =[
    {
        path:"",
        component:HomeComponent,
        title:"Home Page"
    },
    {
        path:"Profile",
        component:Profile,
        //title:"Profile Page"
    },
    {
        path:"Login",
        component:Login,
    },
    {
        path:"Register",
        component:Register,
    },
    {
        path:"Contact",
        component:Contact,
    },
]
