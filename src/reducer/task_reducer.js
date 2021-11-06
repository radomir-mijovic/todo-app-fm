
export const task_reducer = (state, action) => {
    if (action.type === 'FETCH_TODOS') {
        return {
            ...state,
            todos: action.payload,
            filtered_todos: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'DELETE_COMPLETED_TODOS') {
        return {
            ...state
        }
    }

    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    }

    if (action.type === 'ERROR') {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }

    if (action.type === 'ALL_TODOS') {
        return {
            ...state,
            filtered_todos: state.todos
        }
    }

    if (action.type === 'ACTIVE_TODOS') {
        return {
            ...state,
            filtered_todos: state.todos.filter(todo => todo.completed === false)
        }
    }

    if (action.type === 'COMPLETED_TODOS') {
        return {
            ...state,
            filtered_todos: state.todos.filter(todo => todo.completed === true)
        }
    }
}