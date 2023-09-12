import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
//  product: Product[]=[]
  constructor(private httpClient: HttpClient) { }
//16:48
  ngOnInit() {
    // this.getProducts().subscribe(res=>{
    //   this.product= res
    //   //28:9 fancy foot work
    //   console.log(res)
    // })
  }
  // getProducts(): Observable<Product[]>{
  //   return this.httpClient.get<Product[]>('https://localhost:44379/api/product/getProductList')
  //   }

  

}
