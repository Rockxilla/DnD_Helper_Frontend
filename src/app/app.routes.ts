import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Personajes } from './personajes/personajes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'personajes', component: Personajes },
];