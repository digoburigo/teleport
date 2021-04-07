import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared.module";

import { SubDashComponent } from "./sub-dash.component";

const routes: Routes = [
  {
    path: "",
    component: SubDashComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [],
  declarations: [SubDashComponent],
  providers: [],
})
export class SubDashModule {}
