import { Component, OnInit, Input} from '@angular/core';

import { ProductService } from 'src/app/service.service';
import { serviceInterface } from 'src/app/models/servicio.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

 @Input() products: serviceInterface[] = [];
  valorFiltrado: string = '';
  
  constructor(private service: ProductService){
      // this.valorParent = []
    }

  ngOnInit(): void {
    this.service.getProduct().subscribe((response: serviceInterface[]) => {
      this.products = response;
    })
  }

  
}
