const todoTypes = (state = [], action) => {
    switch (action.type) {
        case 'API_ADD_TODO_TYPES':
            return action.todoTypes
        default:
            return state
    }
}

export default todoTypes