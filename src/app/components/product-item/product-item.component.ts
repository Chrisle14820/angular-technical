import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private modalService: NgbModal, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {}
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.product = this.product;
  }
  showRating(): string {
    var rating: string = '0';
    if (this.product.rating) {
      rating = this.product.rating.toString();
    }
    return rating;
  }
}
