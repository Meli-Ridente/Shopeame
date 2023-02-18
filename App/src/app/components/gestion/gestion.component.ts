import { serviceInterface } from '../../models/servicio.interface';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import { ProductService } from 'src/app/service.service';


//importo FormBuilder, y los otros dos de angular/forms
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  // public nuevoProducto2: serviceInterface[]=[]; 
  public productsForm: FormGroup;// aquí me creo mi objeto para el formulario
  public submitted: boolean = false;

constructor(private formBuilder: FormBuilder, private service: ProductService){

// aqui empieza el formulario
this.productsForm = this.formBuilder.group({
  name: ['',[Validators.required]],
  price: ['', [Validators.required]],
  description:['',[Validators.required]],
  image:['',[Validators.required]],
  opinions:['',[Validators.required]],
})
}
public onSubmit() {
  //si se pulsa el submit:
  this.submitted= true;
  if(this.productsForm.valid){
    const nuevoProducto  = {
      name: this.productsForm.get('name')?.value,
      price: this.productsForm.get('price')?.value,
      description: this.productsForm.get('description')?.value,
      id: 0, 
      stars: 0,
      image: this.productsForm.get('image')?.value,
      opinions: this.productsForm.get('opinions')?.value
    } 
   console.log(nuevoProducto);
   this.service.nuevoProd.push(nuevoProducto) // comprobar
 
   this.productsForm.reset();
   this.submitted= false
   
  }

}
}
