import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: boolean = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.loginService.login(this.loginForm.value).subscribe(res => {
      let user = res[0];
      if(user) {
        this.loginService.saveUserToLocalStorage(user);
        this.router.navigate(['/category']);
      } else {
        this.loginError = true;
        setTimeout(() => {
          this.loginError = false;
        }, 2000);
      }
      
    });
  }
}
