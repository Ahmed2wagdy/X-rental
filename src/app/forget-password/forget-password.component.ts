import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true, // هذه تجعل الكومبوننت مستقلة
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  email: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Password reset link sent to:', this.email);
      // يمكنك هنا استدعاء API لإرسال رابط استعادة كلمة المرور
    } else {
      console.log('Invalid form');
    }
  }
}
