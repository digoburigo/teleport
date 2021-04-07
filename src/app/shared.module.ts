import { AttachToDirective } from "./portal/attach-to.directive";
import { NgModule } from "@angular/core";
import { TargetDirective } from "./portal/target.directive";

@NgModule({
  imports: [],
  exports: [TargetDirective, AttachToDirective],
  declarations: [TargetDirective, AttachToDirective],
  providers: [],
})
export class SharedModule {}
