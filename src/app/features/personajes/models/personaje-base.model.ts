import { Usuario } from '../../usuarios/models/usuario.model';

export interface PersonajeBase {
  personaje_ID: number;
  nombre: string;
  experiencia: number;

  usuario?: Usuario;
}