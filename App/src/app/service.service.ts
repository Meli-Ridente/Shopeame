import { Injectable } from '@angular/core';
import { serviceInterface } from './models/servicio.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class ProductService {
  
  url: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';
  constructor(private http: HttpClient) {}
  public productoData={

    name: "",
    price: "",
    description: "",
    image: "",
    opinions: ""
  }
  

   getProduct(): Observable<serviceInterface[]>{
    return this.http.get<serviceInterface[]>(`${this.url}`)
   }

   postProduct(producto:any){
    return this.http.post(this.url, producto)
   }
 
}
