import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Login } from "../login/login";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule, Login],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
