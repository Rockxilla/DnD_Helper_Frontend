import { Component, inject, afterNextRender } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../material/material-module';

@Component({
  selector: 'app-mainpage',
  imports: [MaterialModule],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {
  private _snackBar = inject(MatSnackBar);


}