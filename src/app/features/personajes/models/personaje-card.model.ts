import { ClasePersonaje } from "../../clases/models/clase.model";
import { RazaPersonaje } from "../../razas/models/raza.model";
import { Usuario } from "../../usuarios/models/usuario.model";

export interface PersonajeCard {
  personaje_ID: number;
  nombre: string;
  experiencia: number;
  
  usuario?: Usuario;
  raza?: RazaPersonaje;
  clases?: ClasePersonaje[];
}