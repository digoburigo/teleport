import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nk-navbar",
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-end"
    >
      <div class="flex">
        <span class="mr-2">Portal target: <i>navbar</i> -></span>
        <form class="flex where-to-render">
          <ng-container nkTarget="navbar"></ng-container>
        </form>
      </div>
    </nav>
  `,
  styles: [
    `
      .flex {
        display: flex;
        align-items: center;
      }

      .mr-2 {
        margin-right: 20px;
      }

      .where-to-render {
        border: 2px red dashed;
        min-width: 100px;
        padding: 1rem;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
