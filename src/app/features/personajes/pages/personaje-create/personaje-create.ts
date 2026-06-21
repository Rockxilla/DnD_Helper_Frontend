import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../material/material-module';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PersonajeService } from '../../services/personaje.service';
import { ClaseService } from '../../../clases/services/clase.service';
import { RazaService } from '../../../razas/services/raza.service';

import { ClaseList } from '../../../clases/models/clase-list.model';
import { RazaList } from '../../../razas/models/raza-list.model';



@Component({
  selector: 'app-personaje-create',
  imports: [MaterialModule, RouterModule],
  templateUrl: './personaje-create.html',
  styleUrl: './personaje-create.css',
})
export class PersonajeCreate {
  private personajeService = inject(PersonajeService);
  private claseService = inject(ClaseService);
  private razaService = inject(RazaService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  clases = signal<ClaseList[]>([]);
  razas = signal<RazaList[]>([]);


  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    experiencia: [0, [Validators.min(0)]],
    claseTemplate_ID: [null as number | null, Validators.required],
    razaTemplate_ID: [null as number | null, Validators.required],
    claseNivelInicial: [1, [Validators.min(1), Validators.max(20)]],

    strength: [8, [Validators.required, Validators.min(1), Validators.max(20)]],
    dexterity: [8, [Validators.required, Validators.min(1), Validators.max(20)]],
    constitution: [8, [Validators.required, Validators.min(1), Validators.max(20)]],
    intelligence: [8, [Validators.required, Validators.min(1), Validators.max(20)]],
    wisdom: [8, [Validators.required, Validators.min(1), Validators.max(20)]],
    charisma: [8, [Validators.required, Validators.min(1), Validators.max(20)]],
  });

  //BOTONES DE STATS
  statMin = 1;
  statMax = 20;
  increase(stat: string) {
    const current = this.form.get(stat)?.value ?? 0;
    if (current < this.statMax) {
      this.form.get(stat)?.setValue(current + 1);
    }
  }

  decrease(stat: string) {
    const current = this.form.get(stat)?.value ?? 0;
    if (current > this.statMin) {
      this.form.get(stat)?.setValue(current - 1);
    }
  }

  ngOnInit() {
    this.loadDropdowns();
  }
  
  //Cargar la info de Clases y Razas
  private loadDropdowns(): void {
    this.claseService.getClaseList().subscribe(res => this.clases.set(res));

    this.razaService.getRazaList().subscribe(res => this.razas.set(res));
  }

  //Insertar Info Base del Personaje
  createPersonaje(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      
      this.snackBar.open(
      'Completa todos los campos requeridos',
      'Cerrar',
      {
        duration: 3000
      }
      );

      return;
    }

    const dto = {
      nombre: this.form.value.nombre!,
      experiencia: this.form.value.experiencia ?? 0,

      // TEMPORALMENTE USA USUARIO 1
      usuario_ID: 1,

      claseTemplate_ID: this.form.value.claseTemplate_ID!,
      razaTemplate_ID: this.form.value.razaTemplate_ID!,
      claseNivelInicial: this.form.value.claseNivelInicial!
    };

    this.personajeService.createPersonaje(dto).subscribe({
        next: res => {
          console.log(res);
          this.snackBar.open(res.mensaje, 'Cerrar', {
            duration: 3000
          });
          
        this.router.navigate(['/personajes']);
        },
        error: err => {
          this.snackBar.open(
            err.error?.message ??
            'Error al crear personaje',
            'Cerrar',
            {
              duration: 5000
            }
          );
          console.error(err);
        }
    });
  }



}
