import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero}   from './hero';
import {Initiative} from './initiative';
import {Embracement} from './mock-heroes';
import {RadarService} from './radar.service';
import {Areas} from './mock-heroes';

@Component({
  selector: 'item-form',
  templateUrl: 'app/item-form-component.html',
  inputs: ['area']
})

export class ItemFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
//  model = new Initiative(id:18, name:'Dr IQ', description: 'well', isNew: true};
  model = new Initiative(0, "", "", Embracement.adopt, true);
  submitted = false;
  @Input() area: Areas;
  @Output("onCancel") onClose = new EventEmitter<string>();
  constructor(private _radarService: RadarService) {
//      private _routeParams: RouteParams, private _router: Router) {
  }


  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  addInitiative() {
    this._radarService.addInitiative(this.model, this.area);
  }
  closeForm() {
    console.log("item form: close asked, will emit event")
    this.onClose.emit("nu");
  }
}