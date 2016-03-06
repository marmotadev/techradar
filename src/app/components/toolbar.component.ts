import {Component} from 'angular2/core';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'sd-toolbar',
  moduleId: module.id,
  directives: [Dragula],
  viewProviders: [DragulaService],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {}
