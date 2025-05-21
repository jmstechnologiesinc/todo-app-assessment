const PRIORITY_FILTERS = {
    all: 'all',
    Low: 'Low',
    Medium: 'Medium',
    High: 'High'
};

function filterTodoByPriority(todos, filter) {
    return todos.filter(todo => {
        if (filter !== PRIORITY_FILTERS.all) return todo.priority === filter;
        return true;
    });
}

const PriorityFilter = ({value, onChange}) => {
    return (
        <select className="priority-filter" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value={PRIORITY_FILTERS.all}>All Priorities</option>
            <option value={PRIORITY_FILTERS.Low}>Low</option>
            <option value={PRIORITY_FILTERS.Medium}>Medium</option>
            <option value={PRIORITY_FILTERS.High}>High</option>
        </select>
    );
};

export {PRIORITY_FILTERS, filterTodoByPriority};
export default PriorityFilter;