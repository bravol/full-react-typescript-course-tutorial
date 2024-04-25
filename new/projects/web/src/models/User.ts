interface UserProps {
  name?: string;
  age?: number;
}

//type alias
type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}
  //get a particular data
  get(propName: string): number | string {
    return this.data[propName];
  }

  //update
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  //listener to notify that data has been changed
  on(eventName: string, callback: Callback) {
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  }
}
