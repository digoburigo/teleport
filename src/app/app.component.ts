import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="d-flex">
          <nk-sidebar></nk-sidebar>

          <div class="page-content-wrapper">
              <nk-navbar></nk-navbar>
            
              <div class="container-fluid">
                  <router-outlet></router-outlet>
              </div>
          </div>
          <nk-footer></nk-footer>
      </div>
  `,
})
export class AppComponent {

}
