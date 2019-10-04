import {GET_WORD, SET_LOADING} from './types';

export const getWords = (word) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`http://localhost:5000/words/${word}`)
        const data = await res.json();
        console.log(data);

        dispatch({
            type: GET_WORD,
            payload: data
        })

    } catch (error) {
        dispatch({
            payload: error.response.data
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}