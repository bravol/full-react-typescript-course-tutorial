import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

//implements means Campany should satisfy Mappable interface
export class Company implements Mappable {
  companyName: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPrase = faker.company.catchPhrase();

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  // method
  markerContent(): string {
    return `Company:  + ${this.companyName} + Catch Phrase:  + ${this.catchPrase}`;
    `
`;
  }
  color: string = "black";
}
