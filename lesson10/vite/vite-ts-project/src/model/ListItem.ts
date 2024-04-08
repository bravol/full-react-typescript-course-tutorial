//creating an interface
export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

//creating a class
export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}
  //getter for id
  get id(): string {
    return this._id;
  }
  //setter for id
  set id(id: string) {
    this._id = id;
  }
  //getter for item
  get item(): string {
    return this._item;
  }
  //setter for item
  set item(item: string) {
    this._item = item;
  }
  //getter for checked
  get checked(): boolean {
    return this._checked;
  }
  //setter for checked
  set checked(checked: boolean) {
    this._checked = checked;
  }
}
