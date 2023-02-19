import { Component,OnInit} from '@angular/core';


import { serviceInterface } from 'src/app/modules/servicio.interface';

import { FilterPipe } from 'src/app/app-pipes/filter.pipe';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})


export class ProductosComponent implements OnInit{
  // valorParent: serviceInterface[]
  
  valorFiltrado: string;
  constructor(){
    this.valorFiltrado='';
  }

  ngOnInit(): void{

  }
  
}
