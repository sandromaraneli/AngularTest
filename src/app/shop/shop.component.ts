import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public shoptList!:any;
  public filteredList!:any[]

  public category!:any;

  public minPrice!:any;
  public maxPrice!:any

  constructor(private service:HttpService, public route:ActivatedRoute) {

   

    this.service.GetAllProducts().subscribe(response => {
      console.log(response)
      this.shoptList = response.products;
      console.log(response.products);
      
      this.filteredList = this.shoptList.filter( (shop: { category: { name: any; }; }) => shop.category.name == this.category.info)
      console.log(this.category);
      console.log(this.shoptList);
      console.log(this.filteredList);

      if (this.filteredList.length == 0) {
        this.filteredList = this.shoptList
      }


    });

    this.route.queryParams.subscribe(item => this.category = item);

    
    

  }

  filter() {

    this.filteredList = this.filteredList.filter(product => product.price.beforeDiscount >= this.minPrice && product.beforeDiscount <= this.maxPrice)


  }


}
