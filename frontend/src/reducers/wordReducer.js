import { GET_WORD, SET_LOADING} from "../actions/types";

const intitalState = {
    loading: false,
    words: null,
    phoneKeys: [2,3,4,5,6,7,8,9]
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