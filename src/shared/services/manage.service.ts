import {Injectable} from 'angular2/core';
import {ORG_UNITS} from './mock-heroes';

@Injectable()
export class ManageService {

  getOrganizationUnits() {
    return Promise.resolve(ORG_UNITS);
  }
  getUnit(id: number) {
    return Promise.resolve(ORG_UNITS).then(
          units => units.filter(unit => unit.id === id)[0]
        );
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
