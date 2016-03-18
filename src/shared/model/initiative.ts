import {Embracement} from '../model/embracement';
//export interface Description {
//    id: number;
//    text: string;
//}
export class Initiative {
    constructor(
    public id: number,
    public name: string,
    public description?: string,
    public embracement?: Embracement,
    public nInitiative?: boolean) {}
}
