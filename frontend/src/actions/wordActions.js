import {GET_WORD, SET_LOADING, SET_WORDS} from './types';

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

const myArray = []

export const setWords = () => async dispatch => {

    console.log(myArray)
        if(myArray.length === 2) {
            const newArry = myArray.toString().replace(/,/g,"");
            console.log(newArry)
            getWords(newArry)
            dispatch({
                type: SET_WORDS,
                payload: newArry
            })

            if(newArry.length === 3){
                console.log(newArry.slice(0, 2))
            }
        }  
   }