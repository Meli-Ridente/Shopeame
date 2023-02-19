import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
//importo el componente Gestión

@NgModule({
  declarations: [GestionComponent], // lo declaro
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule // he importado este y quitado el de app.module!!
  ]
})
export class GestionModule { }
