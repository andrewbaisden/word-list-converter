import { GET_WORD, SET_LOADING} from "../actions/types";

const intitalState = {
    test: "hello world",
    loading: false,
    words: null
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
        default:
            return state;
    }
}