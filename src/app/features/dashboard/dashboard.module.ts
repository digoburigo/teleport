import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardPageComponent } from "./dashboard-page.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardPageComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "sub" },
      {
        path: "sub",
        loadChildren: () =>
          import("../sub-dash/sub-dash.module").then((m) => m.SubDashModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [DashboardPageComponent],
  providers: [],
})
export class DashboardPageModule {}
