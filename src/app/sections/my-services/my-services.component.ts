import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import {
  faArrowRight,
  faCode,
  faMobileScreen,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
  faArrowRight = faArrowRight;

  services = [
    {
      icon: faCode,
      color: "bg-brand-600",
      title: 'Web Development',
      text: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    },
    {
      icon: faMobileScreen,
      color: "bg-pink-600",
      title: 'Mobile Development',
      text: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    },
    {
      icon: faPersonChalkboard,
      color: "bg-green-600",
      title: 'Teaching',
      text: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    },
  ];
}
