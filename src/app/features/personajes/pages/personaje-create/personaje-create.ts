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
    razaTemplate_ID: [null as number | null, Validators.required]
  });

  ngOnInit() {
    this.loadDropdowns();
  }
  
  private loadDropdowns(): void {
    this.claseService.getClases().subscribe(res => this.clases.set(res));

    this.razaService.getRazas().subscribe(res => this.razas.set(res));
  }

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
      razaTemplate_ID: this.form.value.razaTemplate_ID!
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
