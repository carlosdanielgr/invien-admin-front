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
        path: 'project-detail',
        loadComponent: () =>
          import(
            './components/admin/pages/project-detail/project-detail.component'
          ).then((c) => c.ProjectDetailComponent),
      },
      {
        path: 'advisor',
        loadComponent: () =>
          import('./components/admin/pages/advisors/advisors.component').then(
            (c) => c.AdvisorsComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
