import { Component, OnInit } from '@angular/core';
import { Product } from "../../interfaces/product";
import { ConvertToSpacesPipe } from "../../pipes/convert-to-spaces.pipe";
import { ProductsService } from '../../services/products.service';


@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    
    constructor(
        private productsService: ProductsService
    ) { }

    
    ngOnInit() {
        this.getProducts();
    }

    getProducts(): void {
        this.productsService.getProducts()
            .subscribe((fetchedProducts) => {
                this.products = fetchedProducts;
                this.filteredProducts = this.products;
            });
    }
    products: Product[];
    filteredProducts: Product[];
    imageWidth :number = 50;
    imageMargin :number = 2;
    pageTitle :string = "Product List";
    showImage :boolean = false;

    toggleImage() :void {
        this.showImage = !this.showImage;
    }

    displayRating(payload): void {
        this.pageTitle = "Product List - rating value: " + payload;
    }

    

    _listFilter: string;

    // ANGULAR BINDING IN THE TEMPLATE CALLS GETTER EVERY TIME IT CHECKS RENDERING 
    get listFilter(): string {
        return this._listFilter;
    } 

    // ANGULAR CALLS SET FROM THE INPUT IN THE TEMPLATE
    set listFilter(value: string) {
        this._listFilter = value.trim();
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string) :Product[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : Product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); 
        /*indexOf returns The index of the first occurrence of searchValue, or -1 if not found.
        */
    }
}
