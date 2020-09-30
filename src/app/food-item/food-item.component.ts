import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../models/food-item';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  foodItems: FoodItem[];
  selectedItems: any[];
  constructor(private route: ActivatedRoute,
              private foodService: FoodService) { }

  ngOnInit() {
    this.selectedItems = [];
    let id = this.route.snapshot.params.categoryId;
    this.foodService.getFoodItems(id).subscribe(res =>{
      this.foodItems = res;
      this.foodItems.forEach((x) =>{
        x['quantity'] = 0;
      });
      this.getState();
    });
  }
  getState() {
    if(localStorage.getItem('selectedItems')) {
      this.selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
      if(this.selectedItems && this.selectedItems.length > 0) {
        this.selectedItems.forEach(item => {
          if(this.foodItems.findIndex(food => food.itemId == item.itemId)) {
            this.foodItems[this.foodItems.findIndex(food => food.itemId == item.itemId)].quantity = item.quantity;
            console.log(item.name + "" + item.quantity);
          }
        })
      }
    }
  }
  getItemToAdd(foodObj) {
    this.selectedItems.push(foodObj);
    this.foodItems.forEach((i) => {
        if(i.itemId === foodObj.itemId) {
          i.quantity = i.quantity + 1;
        }
    })
    localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
  }
  getItemToRemove(foodObj) {
    this.selectedItems.splice(this.selectedItems.findIndex((i) => {
        return i.itemId === foodObj.itemId;
    }), 1);
    this.foodItems.forEach((i) => {
      if(i.itemId === foodObj.itemId) {
        i.quantity = i.quantity - 1;
      }
    })
    localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
  }
}
