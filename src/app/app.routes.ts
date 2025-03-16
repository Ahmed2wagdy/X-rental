import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 👈 يفتح على صفحة تسجيل الدخول افتراضيًا
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forget-password', component: ForgetPasswordComponent }, // ✅ تمت الإضافة هنا
  { path: '**', redirectTo: 'login' } // 👈 أي رابط خاطئ يرجع إلى login
];
