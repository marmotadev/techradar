import {OrganizationUnit} from '../model/organization-unit';
import {Initiative} from '../model/initiative';
import {Embracement} from '../model/embracement';
import {Areas} from '../model/areas';

export enum Categories {
    techniques, tools, platforms, frameworks
};


export function catToArea(cat: string): Areas {
                    console.log('Cat ', cat);
                    if (cat === 'techniques')
                        return Areas.techniques;
                    if (cat === 'tools')
                            return Areas.tools;
                    if (cat === 'platforms')
                                return Areas.platforms;
                    if (cat === 'frameworks')
                                    return Areas.languagesAndFrameworks;
                                    }
export var ORG_UNITS: OrganizationUnit[] = [
    {'id': 1, 'name': 'Java'},
    {'id': 2, 'name': '.NET'}
];

export var INITIATIVES_TECH: Initiative[] = [
            new Initiative(1, 'tool1', 'Test descr3', Embracement.adopt, true),
            new Initiative(2, 'tool2', 'Test descr4', Embracement.assess, false),
            new Initiative(3, 'tool3', 'Test descr5', Embracement.adopt, true),
            new Initiative(4, 'tool4', 'Test descr6', Embracement.trial, false),
            new Initiative(5, 'tool5', 'Test descr7', Embracement.hold, false),
//             new Initiative(6, 'tool8', 'Test descr3', Embracement.adopt, true),
                        new Initiative(7, 'tool9', 'Test descr4', Embracement.assess, false),

];
export var INITIATIVES_TOOL: Initiative[] = [
    new Initiative(1, 'platf', 'Test descr3', Embracement.hold, true),
                        new Initiative(2, 'platf', 'Test descr4', Embracement.assess, false)

];
export var INITIATIVES_PLATF: Initiative[] = [
    new Initiative(1, 'javascript', 'Test descr3', Embracement.adopt, true),
                    new Initiative(2, 'css', 'Test descr4', Embracement.hold, false)
];
export var INITIATIVES_LAN: Initiative[] = [
    new Initiative(1, 'Test1', 'Test descr1', Embracement.adopt, true),
    new Initiative(2, 'Test2', 'Test descr2', Embracement.assess, false),
];

export var INITIATIVES: Initiative[] = [
    new Initiative(1, 'Test1', 'Test descr1', Embracement.adopt, true),
    new Initiative(2, 'Test2', 'Test descr2', Embracement.assess, false),
];
export default ORG_UNITS;
