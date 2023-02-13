import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'productos', component: ProductosComponent},
  {path:'producto', component:ProductoComponent},
  {path:'gestion', component:GestionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
