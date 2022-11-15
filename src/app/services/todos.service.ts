import Todo from '../interfaces/Todo';
import { mockTodos } from '../mock-todos';

export class TodosService {
  todos: Todo[] = mockTodos;

  addTodo(todo: Todo) {
    const todosLength: number = this.todos.length;

    const newTodo: Todo = {
      id: todosLength > 0 ? this.todos[todosLength - 1].id! + 1 : 1,
      name: todo.name,
      description: todo.description,
      priority: todo.priority,
      completed: false,
    };

    this.todos.push(newTodo);
  }

  deleteTodos(id: number) {
    const todoId: number = id!;

    const currentTodoIndex = this.todos.findIndex((todo) => todo.id === todoId);

    this.todos.splice(currentTodoIndex, 1);
  }

  toggleCompleted(id: number) {
    const todoId: number = id!;

    const currentTodoIndex = this.todos.findIndex((todo) => todo.id === todoId);

    this.todos[currentTodoIndex].completed =
      !this.todos[currentTodoIndex].completed;
  }
}
