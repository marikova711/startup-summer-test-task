const initialState = {
    items: [],
    isLoading: false,
    currentPage: 1,
    perPage: 4
};

function reposReducer (state = initialState, action) {
    switch(action.type) {
        case 'SET_REPOS':
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case 'SET_IS_LOADING':
                return {
                ...state,
                isLoading: action.payload
                }
        case 'SET_CURRENT_PAGE':
                return {
                ...state,
                currentPage: action.payload
                }
        default:
            return state;
    }
}

export default reposReducer;