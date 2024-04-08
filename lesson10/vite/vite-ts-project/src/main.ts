import "./css/style.css";
import FullList from "./model/FullLists";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText) return;

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newitem = new ListItem(itemId.toString(), newEntryText);

    fullList.addItem(newitem);
    template.render(fullList);
  });
  const clearitems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearitems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });
  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
