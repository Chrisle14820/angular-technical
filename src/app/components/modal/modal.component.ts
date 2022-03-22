import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../Product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() product: Product;
  element: any;
  constructor(public activeModal: NgbActiveModal, modalService: NgbModal) {}

  ngOnInit(): void {}
  openLink() {
    window.open(this.product.product_link);
  }
  showRating(): string {
    var rating: string = '0';
    if (this.product.rating) {
      rating = this.product.rating.toString();
    }
    return rating;
  }
}
