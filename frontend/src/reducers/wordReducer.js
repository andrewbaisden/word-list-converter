import { GET_WORD } from "../actions/types";

const intitalState = {
    test: "hello world",
    words: null
}

export default (state = intitalState, action) => {
    switch(action) {
        case GET_WORD:
            return {
                ...state,
                words: action.payload
            }
        default:
            return state;
    }
}