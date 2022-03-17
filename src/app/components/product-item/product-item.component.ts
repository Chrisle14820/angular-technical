import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.product = this.product;
  }
}
