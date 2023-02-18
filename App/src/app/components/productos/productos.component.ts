
import { Component, OnInit} from '@angular/core';

import { ProductService } from 'src/app/service.service';

import { serviceInterface } from 'src/app/models/servicio.interface';

// import { FilterPipe } from 'src/app/app-pipes/filter.pipe';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})


export class ProductosComponent implements OnInit{
  product: any[] = [];
  valorFiltrado: string;
  constructor(private service: ProductService){
    this.valorFiltrado='';

  }
  ngOnInit(){
    this.service.getProduct().subscribe((response: any) => {
      response.forEach((productos: serviceInterface)=> {
        this.product.push(productos)
      })
    })
  }
}
