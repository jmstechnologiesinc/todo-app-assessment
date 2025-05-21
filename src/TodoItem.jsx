const TodoItem = ({ 
    todo, 
    onToggleTodoPress,
    onDeleteTodoPress 
}) => {
    const { title, completed, id } = todo;

    return (
        <li className="todo-item">
            <label id="${id}">
                <input 
                    type="checkbox" 
                    id="${id}"
                    checked={completed} 
                    onChange={() => onToggleTodoPress(id)} />
                <p className={completed ? "checked" : null}>{title}</p>
            </label>
            <div class="todo-item-actions" onClick={() => onDeleteTodoPress(id)}>
                <span>Delete</span>
            </div>
        </li>
    );
};

export default TodoItem;