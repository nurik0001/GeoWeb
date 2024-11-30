// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Главная страница
import { AboutComponent } from './about/about.component';  // О нас
import { InstructionsComponent } from './instructions/instructions.component';  // Инструкции
import { ContactsComponent } from './contacts/contacts.component';  // Контакты
import { GlossaryComponent } from './glossary/glossary.component';  // Словарь

const routes: Routes = [
  { path: '', component: HomeComponent },  // Главная страница
  { path: 'about', component: AboutComponent },  // О нас
  { path: 'instructions', component: InstructionsComponent },  // Инструкции
  { path: 'contacts', component: ContactsComponent },  // Контакты
  { path: 'glossary', component: GlossaryComponent }  // Словарь
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
