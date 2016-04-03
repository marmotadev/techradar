import {Embracement} from '../model/embracement';
import {Areas} from '../model/areas';
//export interface Description {
//    id: number;
//    text: string;
//}
export class Initiative {
    constructor(
    public id: number,
    public title: string,
    public description?: string,
    public level?: Embracement,
    public isNew?: boolean,
    public area?: Areas,
    public order?: number,
    public dateCreated?: Date,
    public publicId?: string) {}
    
}
