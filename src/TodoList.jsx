import TodoItem from "./TodoItem";

const TodoList = ({ 
    todos,
    onToggleTodoPress,
    onDeleteTodoPress 
 }) => (
    <ul>
        {todos.map((todo) => (
            <TodoItem 
                key={todo.id}
                todo={todo}  
                onToggleTodoPress={onToggleTodoPress}
                onDeleteTodoPress={onDeleteTodoPress}  />
        ))}
    </ul>
);

export default TodoList;
