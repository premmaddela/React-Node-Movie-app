import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => ({ type: FETCH_MOVIES_REQUEST });
export const fetchMoviesSuccess = (movies) => ({ type: FETCH_MOVIES_SUCCESS, payload: movies });
export const fetchMoviesFailure = (error) => ({ type: FETCH_MOVIES_FAILURE, payload: error });

export const fetchMovies = (page = 1) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        try {
            const response = await axios.get(`/api/movies?page=${page}`); // Pass the page parameter
            dispatch(fetchMoviesSuccess(response.data.results)); // Dispatch only the movie results
            return response.data; // Return the full response to get total pages
        } catch (error) {
            dispatch(fetchMoviesFailure(error.message));
            return { results: [], total_pages: 0 }; // Return a fallback response
        }
    };
};