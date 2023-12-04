import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { MyServicesComponent } from './sections/my-services/my-services.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    AboutMeComponent,
    MyServicesComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
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
