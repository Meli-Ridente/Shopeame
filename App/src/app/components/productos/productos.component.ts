import { Component, OnInit} from '@angular/core';
import { serviceInterface } from 'src/app/models/servicio.interface';


// import { ProductService } from 'src/app/service.service';

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
    // this.valorParent = []
  }

  ngOnInit(): void{

  }
  
}
