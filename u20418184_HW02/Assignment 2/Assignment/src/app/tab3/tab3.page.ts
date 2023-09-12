import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  myDate: Date = new Date();
  constructor() {}

  ngOnInit(): void {
    this.orderDetails();
      
  }
//getOrder functionality to be able display orders in orders tab
  getOrders:any=[];
  orderDetails(){
    if(localStorage.getItem('localCart')){
      this.getOrders=JSON.parse(localStorage.getItem('localCart')) ;
      console.log(this.getOrders);

    }
  }

  
  itemsCart:any=[];
  createOrder(product){
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


    }}  }
