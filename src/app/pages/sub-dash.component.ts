import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nk-sub-dashboard",
  template: `
    <p>sub-dashboard-page works!</p>

    <ng-template nkAttachTo="navbar">
      <button class="btn btn-primary">Dash button</button>
    </ng-template>
  `,
  styles: [],
})
export class SubDashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
