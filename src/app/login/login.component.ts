import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  handleClickShowPassword() {
    this.showPassword = !this.showPassword;
  }

  handleMouseDownPassword(event: Event) {
    event.preventDefault();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username || '';
      const password = this.loginForm.value.password || '';
      if (username && password) {
        this.authService.login(username, password).subscribe((response) => {
          localStorage.setItem('logged', 'true');
          localStorage.setItem('userId', response.user.USUARIOID);
          localStorage.setItem('tipo', response.user.NIVELFIRMA);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/home']);
        });
      }
    }
  }
}
