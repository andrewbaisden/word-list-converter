import {GET_WORD} from './types';

export const getWords = () => async dispatch => {
    try {
        const res = await fetch("http://localhost:5000/words")
        const data = await res.json();
        console.log(data)

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