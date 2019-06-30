import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/Forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private keyword: string;
  private titeFilter: FormControl = new FormControl();
  constructor(private productService: ProductService) {
    this.titeFilter.valueChanges .subscribe(
      value => this.keyword = value
    );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

