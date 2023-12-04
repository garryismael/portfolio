import { Component, ModuleWithProviders } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RoundProgressComponent, NgCircleProgressModule],
  providers: [
    (
      NgCircleProgressModule.forRoot(
        {}
      ) as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    {
      title: "JAVA",
      current: 80
    },
    {
      title: "CSS",
      current: 80
    },
    {
      title: "PYTHON",
      current: 80
    },
    {
      title: "ANGULAR",
      current: 80
    },
    {
      title: "UML",
      current: 80
    },
    {
      title: "REACT",
      current: 80
    },
    {
      title: "TYPESCRIPT",
      current: 80
    },
    {
      title: "JAVASCRIPT",
      current: 80
    },
  ]
}
