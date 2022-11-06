import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Warehouse} from "../models/warehouse";
import {Porducts} from "../models/porducts";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly url='http://localhost:8000/api/';
  constructor(private http:HttpClient) {

  }

  public getProducts(){
    return this.http.get<Porducts[]>(this.url+'products');
  }

}
