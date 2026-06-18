import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Personajes } from './features/personajes/personajes';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'personajes', component: Personajes },
];