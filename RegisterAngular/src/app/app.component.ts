import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent],
  template: '<app-registration></app-registration>',
  styles: []
})
export class AppComponent {
  title = 'registration-app';
}