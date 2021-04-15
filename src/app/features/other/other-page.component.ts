import { Component } from "@angular/core";

// nkAttachTo="navbar" -> this is the only used

@Component({
  selector: "nk-profile-page",
  template: `
    <h1>Other Page</h1>

    <ng-template nkAttachTo="navbar">
      <button mat-raised-button color="accent" (click)="(false)">
        Other Button
      </button>
    </ng-template>
  `,
  styles: [],
})
export class OtherPageComponent {
  profileAlert() {}
}
