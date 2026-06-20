import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Personajes } from './features/personajes/pages/personaje-lista/personaje-lista';
import { PersonajeCreate } from './features/personajes/pages/personaje-create/personaje-create';
import { PersonajeEdit } from './features/personajes/pages/personaje-edit/personaje-edit';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'personajes', component: Personajes },
  { path: 'personajes/create', component: PersonajeCreate },
  { path: 'personajes/edit/:id',component: PersonajeEdit }
];