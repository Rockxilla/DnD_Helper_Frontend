import { Component, inject, afterNextRender } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../material/material-module';
import { Service } from '../service';
import { signal } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule, RouterModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes {
  private _snackBar = inject(MatSnackBar);
  private service = inject(Service);

lstData = signal<Personaje[]>([]);

  constructor() {
    afterNextRender(() => {
      this.loadData();
    });
  }

  private loadData() {
    this.service.getPersonajes().subscribe(res => {
      this.lstData.set(res);
    });
  }
}
