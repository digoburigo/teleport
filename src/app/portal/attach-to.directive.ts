import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {PortalService} from './portal.service';

@Directive({
  selector: '[nkAttachTo]'
})
export class AttachToDirective implements OnInit, OnDestroy{
  @Input('nkAttachTo') targetName: string;

  constructor(
      private portalService: PortalService,
      private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.portalService.attachToTarget(this.targetName, this.template);
  }

  ngOnDestroy(): void {
    this.portalService.clearTarget(this.targetName);
  }



}
