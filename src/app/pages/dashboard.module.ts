import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared.module";

import { DashboardPageComponent } from "./dashboard-page.component";
import { SubDashComponent } from "./sub-dash.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardPageComponent,
    children: [
      {
        path: "sub",
        loadChildren: () =>
          import("./sub-dash.module").then((m) => m.SubDashModule),
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
