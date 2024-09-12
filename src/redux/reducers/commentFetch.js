import { GET_COMMENT_POST } from "../actions"


const initialState = {
    allComment: [],
    myComment: []
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return state
        }

    case GET_COMMENT_POST: {
        return {
            ...state,
            allComment: [...state.allComment, action.payload]
        }
    }
    }
}