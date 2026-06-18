import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material-module';

@Component({
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './home.html',
})
export class Home {}