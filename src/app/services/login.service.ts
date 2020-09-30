import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { FoodItem } from '../models/food-item';
import { User } from '../models/user';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user: User;
  userList: User[];
  constructor(private httpClient: HttpClient) { }

  login(credentials) :any {
    return this.httpClient.get(environment.BASE_URL + '/userlogin?username=' + credentials.username + "&password=" + credentials.password);
  }
  saveUserToLocalStorage(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
