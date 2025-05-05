// login.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: LoginForm = {
    email: '',
    password: '',
    rememberMe: false
  };
  
  loginSuccess = false;
  loginError = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  // Handle form submission
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Login form submitted', this.loginData);
      
      // Here you would typically make an API call to authenticate the user
      // For example:
      // this.authService.login(this.loginData).subscribe(
      //   response => {
      //     this.loginSuccess = true;
      //     this.loginError = '';
      //     // Navigate to dashboard, etc.
      //   },
      //   error => {
      //     this.loginError = 'Invalid email or password';
      //     console.error('Login failed', error);
      //   }
      // );
      
      // For demo purposes, simulate authentication:
      if (this.loginData.email === 'user@example.com' && this.loginData.password === 'password') {
        this.loginSuccess = true;
        this.loginError = '';
        console.log('Login successful');
        
        // Simulate redirect after login
        setTimeout(() => {
          console.log('Redirecting to dashboard...');
          // Here you would navigate to another route
          // this.router.navigate(['/dashboard']);
        }, 2000);
      } else {
        this.loginError = 'Invalid email or password';
        this.loginSuccess = false;
      }
    }
  }
  
  // Method to handle registration link click
  goToRegister(): void {
    console.log('Navigate to registration page');
    // In a real application:
    // this.router.navigate(['/register']);
  }
  
  // Method to handle forgot password link click
  forgotPassword(): void {
    console.log('Navigate to forgot password page');
    // In a real application:
    // this.router.navigate(['/forgot-password']);
  }
}