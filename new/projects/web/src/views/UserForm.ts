import { View } from "./View";

export class UserForm extends View {
  eventsMap(): { [Key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
      //   "mouseenter:h1": this.onHeaderHover,
    };
  }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  //updating the name
  onSetNameClick = (): void => {
    const input = this.parent?.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  template(): string {
    return `
        <div>
          <h1>User Form</h1>
          <div>User name:${this.model.get("name")} </div>
          <div>User name:${this.model.get("age")} </div>
          <input/>
          <button class="set-name">Change Name</button>
          <button class="set-age">Set Random Age</button>
        </div>

        `;
  }
}
