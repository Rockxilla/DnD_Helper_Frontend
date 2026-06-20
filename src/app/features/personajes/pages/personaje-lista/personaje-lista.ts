import { Component, inject, afterNextRender } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../../../material/material-module';
import { PersonajeService } from '../../services/personaje.service';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule, RouterModule],
  templateUrl: './personaje-lista.html',
  styleUrl: './personaje-lista.css',
})
export class Personajes {
  private PersonajeService = inject(PersonajeService);

lstData = signal<Personaje[]>([]);

  constructor() {
    afterNextRender(() => {
      this.loadData();
    });
  }

  private loadData() {
    this.PersonajeService.getPersonajes().subscribe(res => {
      this.lstData.set(res);
    });
  }
}
