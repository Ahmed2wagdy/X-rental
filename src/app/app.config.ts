import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { SignUpComponent } from './sign-up/sign-up.component';
//import { LogInComponent } from './log-in/log-in.component';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms'; // ✅ استيراد FormsModule
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // ✅ توجيه الصفحات
    provideClientHydration(), // ✅ تحسين الأداء للهيدروليكشن
    
  ]
};
