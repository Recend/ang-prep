import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Porducts} from "../../models/porducts";
import {Warehouse} from "../../models/warehouse";
import {WarehousesService} from "../../services/warehouses.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Porducts[]=[]

  constructor(private productService:ProductsService) {
    this.productService.getProducts().subscribe((response)=>{
      this.products=response
    });

  }


  ngOnInit(): void {
  }

}
