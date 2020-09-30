import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item';

@Component({
  selector: 'app-fooditem-box',
  templateUrl: './fooditem-box.component.html',
  styleUrls: ['./fooditem-box.component.css']
})
export class FooditemBoxComponent implements OnInit {
  selectedItems;
  @Input() fooddetail: FoodItem;
  @Output() onAdd = new EventEmitter<FoodItem>();
  @Output() onRemove = new EventEmitter<FoodItem>();
  constructor() { 
    this.selectedItems = [];
  }

  ngOnInit() {
  }
  addToCart(fooditem) {
    this.onAdd.emit(fooditem);
  }
  removeFromCart(fooditem) {
    this.onRemove.emit(fooditem);
  }
}
