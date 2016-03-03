import {Embracement} from './mock-heroes';

export class Initiative {
    constructor(
    public id: number,
    public name: string,
    public description?: string,
    public embracement?: Embracement,
    public nInitiative?: boolean)
    {}
}