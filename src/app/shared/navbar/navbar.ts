import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MaterialModule } from '../../material/material-module';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
