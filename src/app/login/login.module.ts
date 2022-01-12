import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';

console.warn("login module Called");

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    
   
  ]
})
export class LoginModule { }
