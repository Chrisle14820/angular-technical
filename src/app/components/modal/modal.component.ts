import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../Product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() product: Product;
  element: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  openLink() {
    window.open(this.product.product_link);
  }
}
