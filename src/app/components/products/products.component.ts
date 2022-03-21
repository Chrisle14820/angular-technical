import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { PRODUCTS } from 'src/app/mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit(): void {}
}
