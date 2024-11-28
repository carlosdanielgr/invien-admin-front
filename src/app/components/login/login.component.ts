import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { errorFn } from '@shared/functions/errors.function';
import { AuthService, Login } from '@shared/services/auth.service';

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

  loading = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  sendLogin() {
    this.loading = true;
    this.authService.postLogin(this.form.value as Login).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['admin']);
      },
      error: (error) => {
        errorFn('Usuario o contraseña incorrecta');
        this.loading = false;
      },
    });
  }
}
