import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

export interface Product {
    ProductId: number
    ProductName: string
    ProductDescription: string
    ProductPrice: number
    Quantity: number
    Date: Date
    
}

@Injectable({
    providedIn: 'root',
  })
  export class product {
    constructor(private httpClient: HttpClient) {}
    getProducts(): Observable<Product[]>{
       return this.httpClient.get<Product[]>('https://localhost:44379/api/product/getProductList')
       }
  }

