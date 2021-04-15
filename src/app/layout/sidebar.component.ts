import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nk-sidebar",
  template: `
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Teleportation</div>
      <div class="list-group list-group-flush">
        <a
          routerLink="sub"
          class="list-group-item list-group-item-action bg-light"
        >
          Dashboard
        </a>
        <a
          routerLink="other"
          class="list-group-item list-group-item-action bg-light"
        >
          Other Route
        </a>
      </div>
    </div>
  `,
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
