import { Injectable } from '@angular/core';
import { serviceInterface } from './models/servicio.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ProductService {
  public nuevoProd: serviceInterface[]=[];

  productos: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';
  constructor(private http: HttpClient) {}

   getProduct(){
    return this.http.get(`${this.productos}`)
   }
 
}
