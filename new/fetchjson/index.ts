import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

//used to define the structure of object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  //   console.log(response.data);
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  //   console.log(`
  //   the Todo with id: ${id}
  //   has a title of: ${title}
  //   is it finished? ${completed}
  //   `);

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  the Todo with id: ${id}
  has a title of: ${title}
  is it finished? ${completed}
  `);
};
