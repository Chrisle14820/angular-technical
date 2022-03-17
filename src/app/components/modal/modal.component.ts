import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit(): void {}
  openLink() {
    window.open(this.product.product_link);
  }
}
