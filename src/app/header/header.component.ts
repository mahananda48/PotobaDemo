import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItems: FoodItem[];
  constructor() { }

  ngOnInit() {
    this.selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
  }

}
