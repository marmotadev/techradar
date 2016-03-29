import {Component, Input, Output, EventEmitter} from 'angular2/core';
//import {NgForm} from 'angular2/common';
//import {Hero}   from './hero';
import {Initiative} from '../../../shared/model/initiative';
import {Embracement} from '../../../shared/model/embracement';
import {RadarService} from '../../../shared/services/radar.service';
import {Areas} from '../../../shared/model/areas';
//import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'item-form',

    templateUrl: '/manage/components/item-form/item-form-component.html'
})

export class ItemFormComponent {

    /* for template referencing */
    public areasEnum = Areas;
    public embracementEnum = Embracement;

    // model = new Initiative(id:18, name:'Dr IQ', description: 'well', isNew: true};
    model = this.buildModel();
    submitted = false;
    @Input() area: Areas;
    @Output() onCancel = new EventEmitter<string>();
    @Output() onAdd = new EventEmitter();

    constructor(private _radarService: RadarService) {
        //      private _routeParams: RouteParams, private _router: Router) {
    }
    buildModel(): Initiative {
        return new Initiative(0, '', '', Embracement.assess, true);
    }

    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    addInitiative() {
        var savePromise = this._radarService.addInitiative(this.model, this.area);
        savePromise.then(res => {
            console.log('Save finished, emitting event', [this.model, this.area]);
            this.onAdd.emit([this.model, this.area]);
        });
//        this.closeForm();
        this.model = this.buildModel();

    }
    closeForm() {
        console.log('item form: close asked, will emit event');
        this.onCancel.emit('nu');
    }
}
