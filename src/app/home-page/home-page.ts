import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule, Button],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
