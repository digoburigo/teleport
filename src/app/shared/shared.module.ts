import { AttachToDirective } from "./portal/attach-to.directive";
import { NgModule } from "@angular/core";
import { TargetDirective } from "./portal/target.directive";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [],
  exports: [FlexLayoutModule, TargetDirective, AttachToDirective],
  declarations: [TargetDirective, AttachToDirective],
  providers: [],
})
export class SharedModule {}
