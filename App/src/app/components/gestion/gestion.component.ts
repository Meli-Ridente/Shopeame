import { gestionInterface } from '../../models/gestion.interface';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import { ProductService } from 'src/app/service.service';
import { serviceInterface } from 'src/app/models/servicio.interface';

//importo FormBuilder, y los otros dos de angular/forms
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
 
  @Input() products: serviceInterface[] = [];
  public listadoProductos: serviceInterface[] = [];
  public nuevoProducto2: gestionInterface[]=[]; 
  public productsForm: FormGroup;// aquí me creo mi objeto para el formulario
  public submitted: boolean = false;

constructor(private formBuilder: FormBuilder, private service: ProductService){

this.productsForm = this.formBuilder.group({
  name: ['',[Validators.required]],
  price: ['', [Validators.required]],
  description:['',[Validators.required]],
  image:['',[Validators.required]],
  opinions:['',[Validators.required]],
})
}
public onSubmit():any {
  //si se pulsa el submit:
  this.submitted= true;
  if(this.productsForm.valid){
    const nuevoProducto: gestionInterface= {
      name: this.productsForm.get('name')?.value,
      price: this.productsForm.get('price')?.value,
      description: this.productsForm.get('description')?.value,
      image: this.productsForm.get('image')?.value,
      opinions: this.productsForm.get('opinions')?.value
    } 
  //  console.log(nuevoProducto);

  //  this.service.nuevoProd.push(nuevoProducto) // comprobar
 console.log(this.nuevoProducto2)
   this.productsForm.reset();
   this.submitted= false
   this.showProduct()

   return this.nuevoProducto2
  }


} 
public showProduct(): void{
  console.log("funciona"+this.nuevoProducto2)
  

}

// ngOnInit():void{
//   this.service.getProduct().subscribe((data:any)=>{
//     console.log(data)
//     this.listadoProductos=[...data]
//   })
// }

}


