import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  faUpRightFromSquare = faUpRightFromSquare;
  projects = [
    {
      image: 'assets/images/nike-app.png',
      title: 'Angular',
      project: 'Nike Shoe',
      text: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      image: 'assets/images/nike-app.png',
      title: 'Angular',
      project: 'Nike Shoe',
      text: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      image: 'assets/images/nike-app.png',
      title: 'Angular',
      project: 'Nike Shoe',
      text: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      image: 'assets/images/nike-app.png',
      title: 'Angular',
      project: 'Nike Shoe',
      text: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      image: 'assets/images/nike-app.png',
      title: 'Angular',
      project: 'Nike Shoe',
      text: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
  ];
}
