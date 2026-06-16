export interface Personaje {
  personaje_ID: number;
  nombre: string;
  experiencia: number;

  usuario?: {
    usuario_ID: number;
    nombre: string;
  };

  clase?: {
    clase_ID: number;
    nombre: string;
  };

  raza?: {
    raza_ID: number;
    nombre: string;
  };
}