import {Embracement} from '../model/embracement';

export class Initiative {
    constructor(
    public id: number,
    public name: string,
    public description?: string,
    public embracement?: Embracement,
    public nInitiative?: boolean) {}
}
