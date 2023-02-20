import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: `home`, loadChildren:() =>
    import('./components/home/home.module').then(m => m.HomeModule)
  },
  {path: `productos`, loadChildren:() =>
    import('./components/productos/productos.module').then(m => m.ProductosModule),
},

  {path: `gestion`, loadChildren:() =>
    import('./components/gestion/gestion.module').then(m => m.GestionModule)
  },

  //  {path: `producto`, loadChildren:() =>
  //    import('./components/producto/producto.module').then(m => m.ProductoModule)
  //  },

  
  // {path: 'home', component: HomeComponent},
  // {path:'productos', component: ProductosComponent},
  // {path:'producto', component:ProductoComponent},
  // {path:'gestion', component:GestionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
