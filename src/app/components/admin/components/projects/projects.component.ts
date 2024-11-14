import { Component, OnInit } from '@angular/core';
import { Project } from '@shared/project.interface';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectService } from '@shared/services/project.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    // {
    //   id: '1',
    //   name: 'Plaza Andenes Local #233',
    //   amenities: ['Gym', 'Pool', 'Parking'],
    //   price: 200000,
    //   image: ['https://via.placeholder.com/150'],
    //   location: 'Lima, Peru',
    //   bathrooms: 2,
    //   garage: 1,
    //   measure: '150m2',
    //   rooms: 3,
    //   details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   url_video: 'https://www.youtube.com/watch?v=123',
    //   url_map: 'https://www.google.com/maps?q=123',
    //   adivsor: {
    //     name: 'John Doe',
    //     phone: '123456789',
    //     email: 'test@test.com',
    //     image: 'https://via.placeholder.com/150',
    //   },
    // },
    // {
    //   id: '1',
    //   name: 'Plaza Andenes Local #233',
    //   amenities: ['Gym', 'Pool', 'Parking'],
    //   price: 200000,
    //   image: ['https://via.placeholder.com/150'],
    //   location: 'Lima, Peru',
    //   bathrooms: 2,
    //   garage: 1,
    //   measure: '150m2',
    //   rooms: 3,
    //   details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   url_video: 'https://www.youtube.com/watch?v=123',
    //   url_map: 'https://www.google.com/maps?q=123',
    //   adivsor: {
    //     name: 'John Doe',
    //     phone: '123456789',
    //     email: 'test@test.com',
    //     image: 'https://via.placeholder.com/150',
    //   },
    // },
    // {
    //   id: '1',
    //   name: 'Plaza Andenes Local #233',
    //   amenities: ['Gym', 'Pool', 'Parking'],
    //   price: 200000,
    //   image: ['https://via.placeholder.com/150'],
    //   location: 'Lima, Peru',
    //   bathrooms: 2,
    //   garage: 1,
    //   measure: '150m2',
    //   rooms: 3,
    //   details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   url_video: 'https://www.youtube.com/watch?v=123',
    //   url_map: 'https://www.google.com/maps?q=123',
    //   adivsor: {
    //     name: 'John Doe',
    //     phone: '123456789',
    //     email: 'test@test.com',
    //     image: 'https://via.placeholder.com/150',
    //   },
    // },
    // {
    //   id: '1',
    //   name: 'Plaza Andenes Local #233',
    //   amenities: ['Gym', 'Pool', 'Parking'],
    //   price: 200000,
    //   image: ['https://via.placeholder.com/150'],
    //   location: 'Lima, Peru',
    //   bathrooms: 2,
    //   garage: 1,
    //   measure: '150m2',
    //   rooms: 3,
    //   details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   url_video: 'https://www.youtube.com/watch?v=123',
    //   url_map: 'https://www.google.com/maps?q=123',
    //   adivsor: {
    //     name: 'John Doe',
    //     phone: '123456789',
    //     email: 'test@test.com',
    //     image: 'https://via.placeholder.com/150',
    //   },
    // },
    // {
    //   id: '1',
    //   name: 'Plaza Andenes Local #233',
    //   amenities: ['Gym', 'Pool', 'Parking'],
    //   price: 200000,
    //   image: ['https://via.placeholder.com/150'],
    //   location: 'Lima, Peru',
    //   bathrooms: 2,
    //   garage: 1,
    //   measure: '150m2',
    //   rooms: 3,
    //   details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   url_video: 'https://www.youtube.com/watch?v=123',
    //   url_map: 'https://www.google.com/maps?q=123',
    //   adivsor: {
    //     name: 'John Doe',
    //     phone: '123456789',
    //     email: 'test@test.com',
    //     image: 'https://via.placeholder.com/150',
    //   },
    // },
  ];

  constructor(private readonly projectsService: ProjectService) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectsService.getAllProjects().subscribe({
      next: (res) => {
        this.projects = res;
      },
    });
  }
}
