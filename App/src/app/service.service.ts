import { Injectable } from '@angular/core';
import { serviceInterface } from './modules/servicio.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  productos: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';
  constructor(private http: HttpClient) {}

   getProduct(){
    return this.http.get(`${this.productos}`)
   }
}
