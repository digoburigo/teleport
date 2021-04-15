import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NavbarComponent } from "../layout/navbar.component";
import { SidebarComponent } from "../layout/sidebar.component";
import { SharedModule } from "../shared/shared.module";
import { OtherPageComponent } from "../features/other/other-page.component";
import { AppShellComponent } from "./app-shell.component";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  {
    path: "",
    component: AppShellComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../features/dashboard/dashboard.module").then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: "other",
        component: OtherPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ],
  declarations: [
    AppShellComponent,
    SidebarComponent,
    NavbarComponent,
    OtherPageComponent,
  ],
})
export class AppShellModule {}
