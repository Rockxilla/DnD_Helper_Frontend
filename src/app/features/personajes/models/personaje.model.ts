import { Usuario } from '../../../models/usuario/usuario.model';
import { Clase } from '../../../models/clase/clase.model';
import { Raza } from '../../../models/raza/raza.model';

export interface Personaje {
  personaje_ID: number;
  nombre: string;
  experiencia: number;

  usuario?: Usuario;
  clase?: Clase;
  raza?: Raza;
}