// src/app/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';  // Импортируйте RouterModule

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule  // Убедитесь, что RouterModule подключен здесь
  ]
})
export class HomeModule { }
