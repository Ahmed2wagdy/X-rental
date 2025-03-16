import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'sign-up', component: SignUpComponent },
      { path: 'login', component: LogInComponent }, // تأكد من إضافة هذا السطر
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // توجيه افتراضي للصفحة الرئيسية
    ])
  ]
};