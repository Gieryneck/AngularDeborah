import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Product } from "../interfaces/product";

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {}

  private productsUrl: string = "../../api/products/products.json" ;

  getProducts() :Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl); // we dont do error handling cause method this tutorial is obsolete and cant do current approach to error handling
  }
}
