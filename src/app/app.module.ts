import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsComponent,
    ModalComponent,
    HeaderComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
