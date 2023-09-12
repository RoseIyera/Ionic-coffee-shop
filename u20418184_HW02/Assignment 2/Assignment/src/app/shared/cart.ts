import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn:'root'
})

export class CartService{
    
    constructor(private http : HttpClient,private toastr: ToastrService )  {}
    showSuccess(message, title){
        this.toastr.success(message, title)
    }
   
    
    createOrder(){
        return this.http.get<any>('https://localhost:44379/api/product/getProductList')
    }
   
}