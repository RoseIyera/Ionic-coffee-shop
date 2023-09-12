import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
//I was adviced during the consultation that the types of objects that should be in the product array must be Product, so this was my attempt.
  data:any;
  product=[{"productId":1,"productName":"Americano","productDescription":"Double shot of espresso with hot water.","productPrice":32.99,"Quantity":1,"orderLine":[]},{"productId":2,"productName":"Flat White","productDescription":"Single shot of espresso with milk.","productPrice":35.99,"Quantity":1,"orderLine":[]},{"productId":3,"productName":"Classic Latte","productDescription":"Single shot of espresso with texturised milk.","productPrice":40.99,"Quantity":1,"orderLine":[]},{"productId":4,"productName":"Cappuccino","productDescription":"Double shot of espresso with texturised milk.","productPrice":46.99,"Quantity":1,"orderLine":[]}];
  Quantity:number=1;

  form: FormGroup;
  submitted = false;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { 
    this.product = this.product.map(get => {
      get['Quantity'] = 1;
      return get;
    }  
    );
   
  }

  ngOnInit(): void{
    this.form= this.formBuilder.group({
      Quantity:['', Validators.minLength(1)]
    })

  }

  incrementQty(index: number) {
    this.product[index].Quantity += 1;
  }

  decrementQty(index: number) {
    this.product[index].Quantity -= 1;
  }


    getProducts(): Observable<Product[]>{
      return this.httpClient.get<Product[]>('https://localhost:44379/api/product/getProductList')
    }

    itemsCart:any=[];
    addCart(product){
      this.submitted = true;

      if (this.form.invalid) {
        return;
      }
      console.log(JSON.stringify(this.form.value, null, 2));
      console.log(product);
      let cartDataNull = localStorage.getItem('localCart');
      if(cartDataNull == null){
        let storeDataGet:any=[];
        storeDataGet.push(product);
        localStorage.setItem('localCart', JSON.stringify(storeDataGet));
      }
      else{
        var id=product.productId;
        let index:number = -1;
        this.itemsCart =JSON.parse(localStorage.getItem('localCart'));
        for(let i=0; i<this.itemsCart.length; i++){
          if(parseInt(id) === parseInt(this.itemsCart[i].productId)){
            this.itemsCart[i].Quantity=product.Quantity;
            index =i;
            break;

          }
          if(index==-1){
            this.itemsCart.push(product);
            localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
          }
          else{
            localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
          }
        }

      }
        
      
     

    }

    

  
 

 
   
  

}
