import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-projects-page',
  template: `

      <h1>projects-page works!</h1>

      <ng-template nkAttachTo="navbar">
          <button (click)="projectsAlert()" class="btn btn-danger">Projects button</button>
      </ng-template>
  `,
  styles: []
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsAlert() {
    alert('projects')

  }
}
