import axios from "axios";

export const setRepos = (items) => ({type: 'SET_REPOS', payload: items});

export const setIsLoading = (bool) => ({type: 'SET_IS_LOADING', payload:bool});

export const setCurrentPage = (page) => ({type: 'SET_CURRENT_PAGE', payload:page});

export const getRepos = (username, currentPage, perPage) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const response = await axios.get(`https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=${perPage}`)
            dispatch(setRepos(response.data))   
        } catch (e) {
            dispatch(setIsLoading(false))
        }

    }
}