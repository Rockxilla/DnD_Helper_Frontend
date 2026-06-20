import { Usuario } from '../../usuarios/models/usuario.model';
import { ClasePersonaje } from '../../clases/models/clase.model';
import { RazaPersonaje } from '../../razas/models/raza.model';

export interface Personaje {
  personaje_ID: number;
  nombre: string;
  experiencia: number;

  usuario?: Usuario;
  clase?: ClasePersonaje;
  raza?: RazaPersonaje;
}