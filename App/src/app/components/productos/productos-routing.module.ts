import { ProductoComponent } from './../producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';


const routes: Routes = [
  {
    path: '', component:ProductosComponent,
    // children:[
    //    {path:'', component:ProductoComponent, pathMatch:'full'}
    //  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
