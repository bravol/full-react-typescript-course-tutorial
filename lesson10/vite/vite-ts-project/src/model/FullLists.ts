import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(item: ListItem): void;
  removeItem(item: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  //getter

  get list(): ListItem[] {
    return this._list;
  }

  //load
  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((item) => {
      const newItem = new ListItem(item._id, item._item, item._checked);
      FullList.instance.addItem(newItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  //clear
  clearList(): void {
    this._list = [];
    this.save();
  }

  //add item
  addItem(item: ListItem): void {
    this._list.push(item);
    this.save();
  }

  //remove item
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save;
  }
}
