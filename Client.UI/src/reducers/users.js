const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];

        case 'ADD_USERS':
            return state.concat(action.users);
        case 'REMOVE_USER':
            const index = state.findIndex((u) => u.Id === action.user.Id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)]

        default:
            return state
    }

}

export default users