import { Component } from '@angular/core';
import { Advisor } from '@shared/interfaces/project.interface';
import { AddButtonComponent } from '@shared/components/add-button/add-button.component';
import { AdviserComponent } from './components/adviser/adviser.component';

@Component({
  selector: 'app-advisors',
  standalone: true,
  imports: [AddButtonComponent, AdviserComponent],
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.scss',
})
export class AdvisorsComponent {
  advisors: Advisor[] = [
    {
      id: 1,
      name: 'John Doe',
      role_es: 'CEO',
      image: './assets/jorge.png',
      phone: '1234567890',
      email: 'test@test.com',
    },
    {
      id: 1,
      name: 'John Doe',
      role_es: 'CEO',
      image: './assets/jorge.png',
      phone: '1234567890',
      email: 'test@test.com',
    },
    {
      id: 1,
      name: 'John Doe',
      role_es: 'CEO',
      image: './assets/jorge.png',
      phone: '1234567890',
      email: 'test@test.com',
    },
    {
      id: 1,
      name: 'John Doe',
      role_es: 'CEO',
      image: './assets/jorge.png',
      phone: '1234567890',
      email: 'test@test.com',
    },
    {
      id: 1,
      name: 'John Doe',
      role_es: 'CEO',
      image: './assets/jorge.png',
      phone: '1234567890',
      email: 'test@test.com',
    },
    {
      id: 1,
      name: 'John Doe',
      role_es: 'CEO',
      image: './assets/jorge.png',
      phone: '1234567890',
      email: 'test@test.com',
    },
  ];
}
