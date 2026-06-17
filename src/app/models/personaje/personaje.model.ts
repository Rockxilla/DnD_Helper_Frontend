import { Usuario } from '../usuario/usuario.model';
import { Clase } from '../clase/clase.model';
import { Raza } from '../raza/raza.model';

export interface Personaje {
  personaje_ID: number;
  nombre: string;
  experiencia: number;

  usuario?: Usuario;
  clase?: Clase;
  raza?: Raza;
}