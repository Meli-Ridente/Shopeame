import { gestionInterface } from '../../models/gestion.interface';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import { ProductService } from 'src/app/service.service';
import { serviceInterface } from 'src/app/models/servicio.interface';
import { Router } from '@angular/router';

//importo FormBuilder, y los otros dos de angular/forms
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent {
      // @Input() products: serviceInterface[] = [];
      // public listadoProductos: serviceInterface[] = [];
      public productsForm!: FormGroup;// aquí me creo mi objeto para el formulario

  constructor(private formBuilder: FormBuilder,
     private service: ProductService,
     private router: Router
     ){}
  
  public nuevoProducto = this.service.productoData
  public submitted: boolean = false;

ngOnInit():void{
  this.productsForm = this.formBuilder.group({
    name: [this.nuevoProducto.name,[Validators.required]],
    price: [this.nuevoProducto.price, [Validators.required]],
    description:[this.nuevoProducto.description,[Validators.required]],
    image:[this.nuevoProducto.image,[Validators.required]],
    opinions:[this.nuevoProducto.opinions,[Validators.required]],
  });
  // abajo recojo los cambios del formulario y "seteamos" el valor de nuevoProducto que llegaba vacío del servicio
  this.productsForm.valueChanges.subscribe(changes=>{
    this.nuevoProducto = changes
  })
}

public onSubmit():any {
  // this.service.postProduct(this.nuevoProducto).subscribe((data)=>{
    // this.router.navigate(["./producto"]) 
  // })

    console.log(this.nuevoProducto.name)
    this.submitted= true;
    this.productsForm.reset
    if(this.productsForm.valid){
      const productoForm: gestionInterface= {
          name: this.productsForm.get('name')?.value,
          price: this.productsForm.get('price')?.value,
          description: this.productsForm.get('description')?.value,
          image: this.productsForm.get('image')?.value,
          opinions: this.productsForm.get('opinions')?.value
      } 
    }   
}
}
  //   this.productsForm.reset();
  //  this.submitted= false
  //  this.showProduct()

  //  return this.nuevoProducto2
  




