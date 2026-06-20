export interface UpdatePersonajeDto {
  personaje_ID: number;

  nombre?: string;
  experiencia?: number;

  claseNombre?: string;
  claseDescripcion?: string;

  razaNombre?: string;
  razaDescripcion?: string;
}