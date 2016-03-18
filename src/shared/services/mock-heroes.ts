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

/**
 * return [
            { id: 1, title: 'CSS', quadrant: 'techniques', level: 'trial', newValue: true, number: 1 },
            { id: 2, title: 'Javascript', quadrant: 'tools', level: 'assess', newValue: true, number: 1 },
            { id: 3, title: '.NET', quadrant: 'platforms', level: 'hold', newValue: true, number: 1 },
            { id: 4, title: '.NET 4', quadrant: 'platforms', level: 'hold', newValue: true, number: 2 },
            { id: 5, title: 'Javascript1.5', quadrant: 'tools', level: 'assess', newValue: true, number: 2 },
            { id: 6, title: 'JavascriptES5', quadrant: 'tools', level: 'assess', newValue: true, number: 3 },
            { id: 7, title: 'JavascriptES6', quadrant: 'tools', level: 'assess', newValue: true, number: 4 },
            { id: 8, title: 'CI', quadrant: 'techniques', level: 'adopt', newValue: true, number: 2 },
        ];
 */

export var RADAR_DATA: any[] = [
            {id:'adopt', 'title':'ADOPT', 'blips':
                [
                {
                    'id': 112, 
                    'movement': 'c', 
                    'number': 1, 
                    'title': 'Consumer-driven contract testing', 
                    'href':'/radar/view/112',
                    'description':{
                        'id': '9876', 
                        'text': 'When two ...'
                    }
                },
                {'id': 113, 'movement': 'c', 'number': 2, 'title': 'Consumer2-driven contract testing', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'Op op op ...'}
                }
                ]},
            {id:'trial', 'title':'TRIAL', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': 'Casdfadf', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'Wasdfadfhen two ...'}
                },
                {'id': 115, 'movement': 'c', 'number': 2, 'title': 'C4444444', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'112211Op op op ...'}
                }
                ]},
            {id:'assess', 'title':'ASSESS', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': 'C--=-=asdfadf', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'Wasdfadfhen two ...'}
                },
                {'id': 115, 'movement': 'c', 'number': 2, 'title': '=-=-=-=C4444444', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'112211Op op op ...'}
                }
                ]},
            {id:'hold', 'title':'HOLD', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': '33333Casdfadf', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'Wasdfadfhen two ...'}
                },
                {'id': 115, 'movement': 'c', 'number': 2, 'title': 'C5555555555554444444', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'112211Op op op ...'}
                }
                ]}
//            ,
//            {'title':'trial', 'blips': ['b']},
//            {'title':'assess', 'blips': ['c']},
//            {'title':'hold', 'blips': ['d']},
        ];
export var RADAR_DATA2: any[] = [
            {id: 'adopt', 'title':'ADOPT', 'blips':
                [
                {
                    'id': 112, 
                    'movement': 'c', 
                    'number': 1, 
                    'title': 'Cddddddddddddddddddonsumer-driven contract testing', 
                    'href':'/radar/view/112',
                    'description':{
                        'id': '9876', 
                        'text': 'When two ...'
                    }
                },
                {'id': 113, 'movement': 'c', 'number': 2, 'title': 
                'Cddddddddddddddddddddonsumer2-driven contract testing', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'Op op op ...'}
                }
                ]},
            
            {id:'hold', 'title':'HOLD', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': '3ddddddddddd3333Casdfadf', 
                'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'dddddddddddddddddddddddWasdfadfhen two ...'}
                },
                ]}
//            ,
//            {'title':'trial', 'blips': ['b']},
//            {'title':'assess', 'blips': ['c']},
//            {'title':'hold', 'blips': ['d']},
        ];


export default ORG_UNITS;

