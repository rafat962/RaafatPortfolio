import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  {
    path: ':id',
    component: HeroPageComponent,
  },
  {
    path: 'project/:type/:id',
    component: ProjectPageComponent,
  },
];
