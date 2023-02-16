import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ProductoComponent } from './components/producto/producto.component';


import { ProductService } from './service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import {HttpClientModule} from "@angular/common/http"
// no se si es necesario importar FormsMdule, ya que he importado ReactiveFormsModule. Preguntar..



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    GestionComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule, // Importo este módulo para poder crear formularios
    HttpClientModule // importo este múdulo para utilizarlo en sevicios
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
