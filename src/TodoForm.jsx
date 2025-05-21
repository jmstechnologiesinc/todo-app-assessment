import { useState } from "react";

import PriorityFilter, { PRIORITY_FILTERS } from "./PriorityFilter";

function TodoForm({ onSubmit }) {
    const [priority, setPriority] = useState(PRIORITY_FILTERS.all);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const value = e.target.value.trim();

            onSubmit(value, priority);
            e.target.value = "";
        }
    };

    return (
        <div class="todo-form">
            <input 
                type="text"  
                autoFocus 
                placeholder='Add a New Todo'
                onKeyDown={handleKeyDown} />                    
   
            <PriorityFilter
                value={priority}
                onChange={(value) => setPriority(value)} /> 
        </div>
    );
}

export default TodoForm;