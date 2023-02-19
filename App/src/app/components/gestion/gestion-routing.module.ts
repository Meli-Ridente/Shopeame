import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './gestion.component';

const routes: Routes = [
  {
    path: '', component: GestionComponent //ruta hija para cargar el componente Gestión
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class GestionRoutingModule { }
