import { CommonModule } from '@angular/common';
import {
  Component,
  afterNextRender
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {
      AOS.init();
    });
  }

  title = 'portfolio';
}
