let nextTodoId = 0
export const addTodo = text => {
    debugger;
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = filter => {
    debugger;
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = id => {
    debugger;
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
