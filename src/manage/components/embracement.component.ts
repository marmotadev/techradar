import {Component, Input} from 'angular2/core';
@Component({
  selector: 'embracement',
  template: `<div [attr.data-embracementId]='embracementId'><ng-content></ng-content></div>`
})

export class EmbracementComponent {
  @Input() embracementId: string;
}
