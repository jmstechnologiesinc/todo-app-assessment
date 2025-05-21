import { useEffect, useReducer, useState } from 'react';

import todoReducer, { TOGGLE_TODO, REMOVE_TODO, ADD_TODO } from "./reducer";

import PriorityFilter, { PRIORITY_FILTERS, filterTodoByPriority } from './PriorityFilter';
import StatusFilter, { STATUS_FILTERS, filterTodoByStatus } from './StatusFilter';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoStats from './TodoStats';

import './App.css';

const initialTodos = [
  {
    id: 1,
    title: "Learn React Hooks",
    completed: false,
    priority: PRIORITY_FILTERS.High,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Complete practice project",
    completed: true,
    priority: PRIORITY_FILTERS.Medium,
    createdAt: new Date().toISOString()
  }
];

const getInitialTodosFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : initialTodos;
  } catch {
    return initialTodos;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, getInitialTodosFromLocalStorage);
  
  const [filter, setFilter] = useState(STATUS_FILTERS.all);
  const [priorityFilter, setPriorityFilter] = useState(PRIORITY_FILTERS.all);
  const [sortBy, setSortBy] = useState('createdAt');

  const toggleTodo = (id) => dispatch({ type: TOGGLE_TODO, payload: { id } });
  const deleteTodo = (id) => dispatch({ type: REMOVE_TODO, payload: { id } });
  const addTodo = (title, priority) => dispatch({ type: ADD_TODO, payload: { title, priority } });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

   const getFilteredTodos = () => {
    let filteredTodos = filterTodoByStatus(todos, filter);
    filteredTodos = filterTodoByPriority(filteredTodos, priorityFilter);

    return filteredTodos.sort((a, b) => {
        if (sortBy === 'priority') {
          const priorityValues = { [PRIORITY_FILTERS.Low]: 1, [PRIORITY_FILTERS.Medium]: 2, [PRIORITY_FILTERS.High]: 3 };
          return priorityValues[b.priority] - priorityValues[a.priority];
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  };

  return (
    <div class="wrapper">
      <TodoForm onSubmit={addTodo} />

      <div className="controls">
        <div class="filters">
            <StatusFilter  
              value={filter} 
              onChange={(value) => setFilter(value)} />

            <PriorityFilter
              value={priorityFilter}
              onChange={(value) => setPriorityFilter(value)} /> 
            
            <select class="filter-dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="createdAt">Sort by Date</option>
              <option value="priority">Sort by Priority</option>
            </select>
        </div>
      </div>
      <TodoList
        todos={getFilteredTodos()} 
        onToggleTodoPress={toggleTodo} 
        onDeleteTodoPress={deleteTodo} />
      <TodoStats todos={todos} /> 
    </div>
  );

}

export default App;
