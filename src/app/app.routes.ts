import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '**', redirectTo: '/sign-in' }, // Fallback route
  {
    path: 'sign-in',
    loadComponent: () => import('./pages/sign-in/sign-in.component')
      .then(m => m.SignInComponent)
  },
  {
    path: 'mentors',
    loadComponent: () => import('./pages/mentors/mentors.component')
      .then(m => m.MentorsComponent)
  },
];
