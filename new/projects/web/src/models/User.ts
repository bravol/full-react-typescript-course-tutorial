import axios, { AxiosResponse } from "axios";
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

//type alias
type Callback = () => void;

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
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
  //fetch user
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    const url = "http://localhost:3000/users";
    if (this.get("id")) {
      //put
      axios.put(`${url}/${id}`, this.data);
    } else {
      //post
      axios.post(`${url}`, this.data);
    }
  }
}
