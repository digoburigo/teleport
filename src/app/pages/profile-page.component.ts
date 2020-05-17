import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nk-profile-page',
  template: `
      <h1>Profile Page</h1>
      
      <ng-template nkAttachTo="navbar">
          <button (click)="profileAlert()" class="btn btn-primary">Profile button</button>
      </ng-template>

      <p *nkAttachTo="'footer'">shoe in footer from profile page</p>

  `,
  styles: []
})
export class ProfilePageComponent  {

  profileAlert() {
    alert('Profile alert');
  }
}
