export interface CreatePersonajeDto {
  nombre: string;
  experiencia?: number;

  usuario_ID: number;
  claseTemplate_ID: number;
  razaTemplate_ID: number;
}

export interface CreatePersonajeResponse {
  personaje_ID: number;
  mensaje: string;
}