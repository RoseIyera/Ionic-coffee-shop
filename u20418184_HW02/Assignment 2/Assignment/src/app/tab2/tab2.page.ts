import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../shared/cart';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  Object = Object;
  
  constructor(private toastr: ToastrService, private cartService:CartService) {}

  ngOnInit(): void {
    this.cartDetails();
      
  }

  getCartDetails:any=[];
  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart')) ;
      console.log(this.getCartDetails);

    }
  }
//This code will enable the user to delete the order added to the basket
  itemDelete(getCartDetails){
    console.log(getCartDetails);
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')) ;
      for(let i=0; this.getCartDetails.length; i++){
        if(this.getCartDetails[i].productId === getCartDetails){
          this.getCartDetails.splice(i,1);
          localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
            this.cartDetails();
        }
      }
    }
  }

  itemsCart:any=[];
  createOrder(product){
    this.cartService.showSuccess("Checkout was completed successfully!!","")
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
