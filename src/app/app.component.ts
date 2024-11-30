import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GlossaryComponent } from './glossary/glossary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  ],
  templateUrl: './app.component.html',  // Правильный путь к HTML-шаблону
  styleUrls: ['./app.component.css'],  // Правильный путь к CSS
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  activeComponent: any = HomeComponent;  // Изначально активен HomeComponent
  selectedLanguage = 'Eng'; 
  selectedComponent = 'home';

  // Изменяет язык
  setLanguage(language: string) {
    this.selectedLanguage = language;
  }

  // Устанавливает активный компонент
  setActiveComponent(component: string) {
    switch (component) {
      case 'home':
        this.activeComponent = HomeComponent;
        break;
      case 'about':
        this.activeComponent = AboutComponent;
        break;
      case 'instructions':
        this.activeComponent = InstructionsComponent;
        break;
      case 'contacts':
        this.activeComponent = ContactsComponent;
        break;
      case 'glossary':
        this.activeComponent = GlossaryComponent;
        break;
      default:
        this.activeComponent = HomeComponent;
    }
    this.selectedComponent = component; // Обновляем текущий активный компонент
  }
}
