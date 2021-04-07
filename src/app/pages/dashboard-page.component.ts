import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nk-dashboard-page",
  template: `
    <p>dashboard-page works!</p>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DashboardPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
