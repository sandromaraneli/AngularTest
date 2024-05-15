import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient ) {
  }
    GetAllProducts(){
      return this.http.get<any>("https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=38")

    }
  public info!:String;

  private num:Number = 10;
   
}
