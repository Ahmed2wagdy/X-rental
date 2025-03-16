import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // التوجيه الافتراضي إلى صفحة تسجيل الدخول
    { path: 'login', component: LogInComponent },
    { path: 'sign-up', component: SignUpComponent } // تأكد من أن الاسم متطابق
];
