import { Component } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = PRODUCTS;
  filter = {
    bronzer: false,
    blush: false,
    lip_liner: false,
    foundation: false,
    eyeshadow: false,
    eyeliner: false,
    nail_polish: false,
    lipstick: false,
    mascara: false,
  };

  constructor() {}

  filterChange() {
    this.filteredProducts = this.products.filter(
      (x) =>
        (x.product_type === 'bronzer' && this.filter.bronzer) ||
        (x.product_type === 'blush' && this.filter.blush) ||
        (x.product_type === 'lip_liner' && this.filter.lip_liner) ||
        (x.product_type === 'foundation' && this.filter.foundation) ||
        (x.product_type === 'eyeshadow' && this.filter.eyeshadow) ||
        (x.product_type === 'eyeliner' && this.filter.eyeliner) ||
        (x.product_type === 'nail_polish' && this.filter.nail_polish) ||
        (x.product_type === 'lipstick' && this.filter.lipstick) ||
        (x.product_type === 'mascara' && this.filter.mascara)
    );
  }
}
