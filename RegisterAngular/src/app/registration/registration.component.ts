import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: RegistrationForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  registrationSuccess = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Check if passwords match
  passwordsMatch(): boolean {
    return this.user.password === this.user.confirmPassword;
  }

  // Handle form submission
  onSubmit(form: NgForm): void {
    if (form.valid && this.passwordsMatch()) {
      console.log('Form submitted successfully', this.user);
      
      // Here you would typically make an API call to register the user
      
      // For demo purposes:
      this.registrationSuccess = true;
      
      // Reset form after successful submission
      setTimeout(() => {
        form.resetForm();
        this.registrationSuccess = false;
      }, 3000);
    }
  }
}