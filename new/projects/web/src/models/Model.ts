import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set: (value: T) => void; //this approach
  getAll(): T; //or this approach
  get<K extends keyof T>(Key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on: (eventName: string, callback: () => void) => void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  //reinplementing the methods
  on = this.events.on; // not calling a function but a reference
  trigger = this.events.trigger;
  get = this.attributes.get;
  //set
  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }
  //fetch
  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
  //save
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("Data saved");
      })
      .catch(() => {
        this.trigger("Error occured");
      });
  }
}

// get get() {
//     return this.attributes.get;
//   }
