import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaSonidosComponent } from './pages/lista-sonidos/lista-sonidos.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    }, // Página principal
    { 
        path: 'lista-sonidos', 
        component: ListaSonidosComponent 
    }, // Nueva vista
];
