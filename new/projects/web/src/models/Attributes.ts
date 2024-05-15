export class Attributes<T> {
  constructor(private data: T) {}
  //get a particular data
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  //update
  set(update: T): void {
    Object.assign(this.data, update);
  }
  getAll(): T {
    return this.data;
  }
}
