import { GET_WORD, SET_LOADING, SET_WORDS} from "../actions/types";

const intitalState = {
    loading: false,
    words: null,
    phoneKeys: [2,3,4,5,6,7,8,9],
    myArray: []
}

export default (state = intitalState, action) => {
    switch(action.type) {
        case GET_WORD:
            return {
                ...state,
                words: action.payload
            }
            case SET_LOADING: {
                return {
                    ...state,
                    loading: true
                }
            }
            case SET_WORDS:
            return {
                ...state,
                myArray: action.payload
            }
        default:
            return state;
    }
}