import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

//tells ts the User we create satisfies the Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  //constructor
  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  color: string = "red";

  //methods
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
