import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard-page.component";
import { ProfilePageComponent } from "./pages/profile-page.component";
import { ProjectsPageComponent } from "./pages/projects-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./pages/dashboard.module").then((m) => m.DashboardPageModule),
  },
  {
    path: "profile",
    component: ProfilePageComponent,
  },
  {
    path: "projects",
    component: ProjectsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
