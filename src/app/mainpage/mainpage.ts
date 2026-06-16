import { Component, inject, afterNextRender } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../material/material-module';
import { Service } from '../service';
import { signal } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-mainpage',
  imports: [MaterialModule],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {
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