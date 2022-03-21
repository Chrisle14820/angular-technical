import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  products: Product[] = PRODUCTS;
  @Input() filter: any;
  @Output() filteringProducts = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  // filterProduct(e: any) {
  //   console.log(e);
  //   console.log(e.target.value);
  // }
}
