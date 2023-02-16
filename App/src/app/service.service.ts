import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceInterface } from './modules/servicio.interface';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class ProductService {
  productos: serviceInterface[];
  constructor(private http: HttpClient) {
    this.productos = []
    fetch('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
      .then(response => response.json())
      .then(json => this.productos = json)

   }
}
