import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  selectedCity = '';
  birthDate = '';
  password = '';
  confirmPassword = '';
  termsAccepted = false;

  cities: string[] = ['Cairo', 'Alexandria', 'Giza', 'Luxor','Mansoura' ,'Aswan'];
  
  onSubmit(form: any) {
    if (form.valid) {
      alert('Registration successful!');
      console.log('User Data:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        selectedCity: this.selectedCity,
        birthDate: this.birthDate,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
