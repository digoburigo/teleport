import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-navbar',
  template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-end">
          <form class="form-inline">
              <ng-container nkTarget="navbar"></ng-container>
          </form>
      </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
