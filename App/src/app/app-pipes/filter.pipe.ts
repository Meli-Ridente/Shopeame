import { Pipe, PipeTransform } from '@angular/core';
import { serviceInterface } from '../models/servicio.interface';

@Pipe({
  name: 'filterProduct'
})
export class FilterPipe implements PipeTransform {

  transform(products: serviceInterface[], valorFiltrado: string): serviceInterface[]{
    const valorLower:string=valorFiltrado.toLowerCase();
    
    return products.filter((value: serviceInterface) => {
      return value.name.toLowerCase().includes(valorLower);
    }) 
  }
}
