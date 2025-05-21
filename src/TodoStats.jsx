import { PRIORITY_FILTERS, filterTodoByPriority } from "./PriorityFilter";
import { STATUS_FILTERS, filterTodoByStatus } from "./StatusFilter";

const TodoStats = ({todos}) => (
    <div className="todo-stats">
        total: {todos.length}, 
        active: {filterTodoByStatus(todos, STATUS_FILTERS.active).length}, 
        completed: {filterTodoByStatus(todos, STATUS_FILTERS.completed).length}, 
        highest priority incomplete: {filterTodoByPriority(todos, PRIORITY_FILTERS.High).length}
    </div>
);

export default TodoStats;
