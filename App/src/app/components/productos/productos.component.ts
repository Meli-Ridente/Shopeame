import { Component, OnInit} from '@angular/core';

import { ProductService } from 'src/app/service.service';

import { serviceInterface } from 'src/app/modules/servicio.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  productos: serviceInterface[]
  constructor(service: ProductService){
    this.productos = service.productos;
  }

  ngOnInit(){

  }
}
