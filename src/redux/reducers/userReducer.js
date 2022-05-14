const initialState = {
    currentUser: {},
    isFetching: false,
    publicRepos: 0,
    isFetchError: false
};

function userReducer (state = initialState, action) {
    switch(action.type) {
        case 'SET_INITIAL_STATE':
            return initialState
        case 'SET_USER':
            return {
                ...state,
                currentUser: action.payload,
                isFetching: false,
                publicRepos: action.payload.public_repos
            }
        case 'SET_IS_FETCHING':
                return {
                ...state,
                isFetching: action.payload
                }
        case 'SET_FETCH_ERROR':
                    return {
                    ...state,
                    isFetchError: action.payload
                    }
        default:
            return state;
    }
}

export default userReducer;