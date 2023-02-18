import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serviceInterface } from 'src/app/models/servicio.interface';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class ProductService {
  
  url: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';
  constructor(private http: HttpClient) {}

   getProduct(): Observable<serviceInterface[]>{
    return this.http.get<serviceInterface[]>(`${this.url}`)
   }
}
