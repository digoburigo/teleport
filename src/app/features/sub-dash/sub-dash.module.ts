import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

import { SubDashComponent } from "./sub-dash.component";

import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  {
    path: "",
    component: SubDashComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
  ],
  exports: [],
  declarations: [SubDashComponent],
  providers: [],
})
export class SubDashModule {}
