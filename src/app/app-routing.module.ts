import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes: Routes =[
  {path:'login', loadChildren:()=>import('./login/login.module').then(mod=>mod.LoginModule)},
  ]

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
