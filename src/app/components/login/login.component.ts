import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Login, LoginService } from './login.service';
import { errorFn } from '@shared/errors';

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
    private readonly loginService: LoginService
  ) {}

  sendLogin() {
    this.loading = true;
    this.loginService.postLogin(this.form.value as Login).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['admin']);
      },
      error: (error) => {
        Swal.fire(errorFn('Usuario o contraseña incorrecta'));
        this.loading = false;
        console.error(error);
      },
    });
  }
}
