//import { Hero } from './hero';
import {OrganizationUnit} from './OrganizationUnit'
import {Initiative} from './initiative';

export var HEROES: Hero[] = [
	{"id": 11, "name": "Mr. Nice"},
	{"id": 12, "name": "Narco"},
	{"id": 13, "name": "Bombasto"},
	{"id": 14, "name": "Celeritas"},
	{"id": 15, "name": "Magneta"},
	{"id": 16, "name": "RubberMan"},
	{"id": 17, "name": "Dynama"},
	{"id": 18, "name": "Dr IQ"},
	{"id": 19, "name": "Magma"},
	{"id": 20, "name": "Tornado"}
];



export enum Categories {
    techniques, tools, platforms, frameworks
};
export enum Embracement {
    assess, trial, adopt, hold
}
export enum Areas {
    techniques, tools, platforms, languagesAndFrameworks
}
export function catToArea(cat: string): Areas {
                    console.log("Cat ", cat);
                    if (cat == "techniques")
                        return Areas.techniques;
                    if (cat == "tools")
                            return Areas.tools;
                    if (cat == "platforms")
                                return Areas.platforms;
                    if (cat == "frameworks")
                                    return Areas.languagesAndFrameworks;
                                    }
export var ORG_UNITS: OrganizationUnit[] = [
    {"id": 1, "name": "Java"},
    {"id": 2, "name": ".NET"}
];

export var INITIATIVES_TECH: Initiative[] = [
            new Initiative(1, "tool1", "Test descr3", Embracement.adopt, true),
                    new Initiative(2, "tool2", "Test descr4", Embracement.assess, false)

];
export var INITIATIVES_TOOL: Initiative[] = [
    new Initiative(1, "platf", "Test descr3", Embracement.hold, true),
                        new Initiative(2, "platf", "Test descr4", Embracement.assess, false)

];
export var INITIATIVES_PLATF: Initiative[] = [
    new Initiative(1, "javascript", "Test descr3", Embracement.adopt, true),
                    new Initiative(2, "css", "Test descr4", Embracement.hold, false)
];
export var INITIATIVES_LAN: Initiative[] = [
    new Initiative(1, "Test1", "Test descr1", Embracement.adopt, true),
    new Initiative(2, "Test2", "Test descr2", Embracement.assess, false),
];

export var INITIATIVES: Initiative[] = [
    new Initiative(1, "Test1", "Test descr1", Embracement.adopt, true),
    new Initiative(2, "Test2", "Test descr2", Embracement.assess, false),
];
export default Areas