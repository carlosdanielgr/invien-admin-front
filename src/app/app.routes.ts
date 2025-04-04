import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard()],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/admin/pages/projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
      },
      {
        path: 'properties',
        loadComponent: () =>
          import(
            './components/admin/pages/properties/properties.component'
          ).then((c) => c.PropertiesComponent),
      },
      {
        path: 'project-add',
        loadComponent: () =>
          import(
            './components/admin/pages/manage-project/manage-project.component'
          ).then((c) => c.ManageProjectComponent),
      },
      {
        path: 'project-edit',
        loadComponent: () =>
          import(
            './components/admin/pages/manage-project/manage-project.component'
          ).then((c) => c.ManageProjectComponent),
      },
      {
        path: 'property-add',
        loadComponent: () =>
          import(
            './components/admin/pages/manage-properties/manage-properties.component'
          ).then((c) => c.ManagePropertiesComponent),
      },
      {
        path: 'property-edit',
        loadComponent: () =>
          import(
            './components/admin/pages/manage-properties/manage-properties.component'
          ).then((c) => c.ManagePropertiesComponent),
      },
      {
        path: 'project-detail',
        loadComponent: () =>
          import(
            './components/admin/pages/project-detail/project-detail.component'
          ).then((c) => c.ProjectDetailComponent),
      },
      {
        path: 'property-detail',
        loadComponent: () =>
          import(
            './components/admin/pages/property-detail/property-detail.component'
          ).then((c) => c.PropertyDetailComponent),
      },
      {
        path: 'advisor',
        loadComponent: () =>
          import('./components/admin/pages/advisors/advisors.component').then(
            (c) => c.AdvisorsComponent
          ),
      },
      {
        path: 'locations',
        loadComponent: () =>
          import('./components/admin/pages/locations/locations.component').then(
            (c) => c.LocationsComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
