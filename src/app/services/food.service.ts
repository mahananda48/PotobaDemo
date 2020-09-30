import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { FoodItem } from '../models/food-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }
  
  getFoodItems(categoryId: number) {
    return this.httpClient.get<FoodItem[]>(environment.BASE_URL + '/fooditems?categoryId=' + categoryId)
  }
}
