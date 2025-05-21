const STATUS_FILTERS = {
    all: 'all',
    active: 'active',
    completed: 'completed',
};

function filterTodoByStatus(todos, filter) {
    return todos.filter(todo => {
        if (filter === STATUS_FILTERS.active) return !todo.completed;
        if (filter === STATUS_FILTERS.completed) return todo.completed;
        return true;
    });
}

const StatusFilter = ({value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value={STATUS_FILTERS.all}>All</option>
            <option value={STATUS_FILTERS.active}>Active</option>
            <option value={STATUS_FILTERS.completed}>Completed</option>
        </select>
    );
};

export {STATUS_FILTERS, filterTodoByStatus};
export default StatusFilter;