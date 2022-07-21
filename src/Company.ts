import faker from "faker";
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    companyPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red'

    constructor() {
        this.companyName = faker.company.companyName();
        this.companyPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

     markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h3>Catch Phrase: ${this.companyPhrase}</h3>
            </div>
        `
    }
}