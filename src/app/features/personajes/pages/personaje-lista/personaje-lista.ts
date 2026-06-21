import { Component, inject, afterNextRender } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../../../material/material-module';
import { PersonajeService } from '../../services/personaje.service';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonajeBase } from '../../models/personaje-base.model';
import { PersonajeCard } from '../../models/personaje-card.model';

import { RazaService } from '../../../razas/services/raza.service';
import { ClaseService } from '../../../clases/services/clase.service';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule, RouterModule],
  templateUrl: './personaje-lista.html',
  styleUrl: './personaje-lista.css',
})
export class Personajes {
  private PersonajeService = inject(PersonajeService);
  private RazaService = inject(RazaService);
  private ClaseService = inject(ClaseService);

lstData = signal<PersonajeCard[]>([]);

  constructor() {
    afterNextRender(() => {
      this.loadData();
    });
  }

  private loadData() {
  this.PersonajeService.getPersonajes().subscribe(res => {

    const baseCards: PersonajeCard[] = res.map(p => ({
      ...p,
      raza: undefined,
      clases: undefined
    }));

    this.lstData.set(baseCards);

    this.enrichCards(baseCards);
  });
  }
  
  private enrichCards(cards: PersonajeCard[]) {
    cards.forEach(card => {
      this.RazaService.getRaza(card.personaje_ID)
        .subscribe(raza => {
          this.updateCard(card.personaje_ID, { raza });
        });
      this.ClaseService.getClases(card.personaje_ID)
        .subscribe(clases => {
          this.updateCard(card.personaje_ID, { clases });
        });

    });

  }
  private updateCard(id: number, patch: Partial<PersonajeCard>) {
    this.lstData.update(list =>
      list.map(c =>
        c.personaje_ID === id ? { ...c, ...patch } : c
      )
    );
  }
}
