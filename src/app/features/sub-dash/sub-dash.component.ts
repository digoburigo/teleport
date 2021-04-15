import { Component, OnInit } from "@angular/core";

// nkAttachTo="navbar" -> this is the only used

@Component({
  selector: "nk-sub-dashboard",
  template: `
    <h1>Sub Dash Page</h1>

    <ng-template nkAttachTo="navbar">
      <div fxLayout="row" fxLayoutAlign="start start" fxLayoutGap="30px">
        <button mat-raised-button color="primary" (click)="(false)">
          Sub Dash Button
        </button>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class SubDashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
