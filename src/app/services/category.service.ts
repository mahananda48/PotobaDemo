import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { FoodItem } from '../models/food-item';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(environment.BASE_URL + '/categories')
  }
  getFoodItems(categoryId: number) {
    return this.httpClient.get<FoodItem[]>(environment.BASE_URL + '/fooditems?categoryId=' + categoryId)
  }
}
