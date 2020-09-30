import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  orderDetails;
  priceTotal: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.orderDetails = [];
    this.orderDetails = JSON.parse(localStorage.getItem('orderSummary'));
    this.priceTotal = JSON.parse(localStorage.getItem('priceTotal'));
  }
  goToCategory() {
    localStorage.removeItem("selectedItems");
    this.router.navigate(['/category']);
  }
  logout() {
    localStorage.removeItem("selectedItems");
    localStorage.removeItem("user");
    localStorage.removeItem("orderSummary");
    localStorage.removeItem("priceTotal");
    this.router.navigate(['']);
  }

}
