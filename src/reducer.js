import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({ id: uuidv4(), title: action.payload.title, priority: action.payload.priority, completed: false, createdAt: new Date().toISOString()});
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        case TOGGLE_TODO:
            return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    }

    throw Error(`Unknown action: ${action.type}`);
};

export default todoReducer
