import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Login, LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  sendLogin() {
    this.loginService.postLogin(this.form.value as Login).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['admin']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
