import { serviceInterface } from './../../modules/servicio.interface';
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
  
  public productos!: serviceInterface[]; // aquí me voy a traer los productos de la api
  public productsForm!: FormGroup;// aquí me creo mi objeto para el formulario
  public submitted: boolean = false;

constructor(private formBuilder: FormBuilder, service: ProductService){
  this.productos = service.productos;
  // public newProduct = this.serviceInterface.productos
// aqui pongo por defecto unos campos que me traigo del servicio
this.productsForm = this.formBuilder.group({
  nameForm: ['',[Validators.required], Validators.maxLength(30), Validators.minLength(2)],
  priceForm: ['', [Validators.required], Validators.maxLength(10), Validators.minLength(1)],
  descriptionForm:['',[Validators.required], Validators.maxLength(1600)],
  imageSrcForm:['',[Validators.required], Validators.maxLength(1600), Validators.minLength(4)],
  opinionsForm:['',[Validators.required], Validators.maxLength(1600), Validators.minLength(1)],

})
}
public onSubmit(): void{

  //si se pulsa el submit:
  this.submitted= true;
  if(this.productsForm.valid){
    //crea el producto
     producto: serviceInterface[]
  }

}
}
