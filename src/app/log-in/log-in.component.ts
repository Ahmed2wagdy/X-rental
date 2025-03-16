import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true, // ✅ تأكد أن الـ Component مستقل
  imports: [CommonModule, RouterModule, FormsModule], // ✅ أضف RouterModule هنا
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('User logged in with:', this.email, this.password);
      // من هنا يمكنك استدعاء API لتسجيل الدخول
    } else {
      console.log('Invalid form');
    }
  }
}