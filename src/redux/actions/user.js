import axios from "axios";

export const setInitialState = () => ({type: 'SET_INITIAL_STATE'});

export const setUser = (user) => ({type: 'SET_USER', payload:user});

export const setIsFetching = (bool) => ({type: 'SET_IS_FETCHING', payload:bool});

export const setFetchError = (bool) => ({type: 'SET_FETCH_ERROR', payload:bool});

export const getUser = (username) => {
        return async (dispatch) => {
            try {
                dispatch(setIsFetching(true))
                const response = await axios.get(`https://api.github.com/users/${username}`)
                dispatch(setUser(response.data))
                dispatch(setFetchError(false))   
            } catch (e) {
                username ===  '' ? dispatch(setInitialState()) : dispatch(setFetchError(true))
                dispatch(setIsFetching(false))
            }
        }
}



