import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FoodItem } from '../models/food-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number = 0;
  constructor(private router: Router) { 
    this.router.events,(event:Event) => event instanceof NavigationEnd    
  }
  selectedItems: FoodItem[];
  categoryId: number;
  ngOnInit() {
    this.categoryId = 1;
    this.getSelectedItemsSort();
  }
  goToCheckout() {
    this.router.navigate(['/confirm-order']);
  }
  getTotal() {
    for(let i=0; i<this.selectedItems.length; i++) {
      this.total = this.total + (this.selectedItems[i].quantity * this.selectedItems[i].price);
    }
  }
  getSelectedItemsSort() {
    let temp = [];
    this.selectedItems = [];
    temp = localStorage.getItem('selectedItems') ? JSON.parse(localStorage.getItem('selectedItems')) : [];
    for(let i = 0; i< temp.length; i++) {
      if(!this.selectedItems.find(x => x.itemId == temp[i].itemId)) {
        this.selectedItems.push(temp[i]);
      }
    }
    this.getTotal();
    localStorage.setItem('orderSummary', JSON.stringify(this.selectedItems));
    localStorage.setItem('priceTotal', this.total.toString());
  }
}
