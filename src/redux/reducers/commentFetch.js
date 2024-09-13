import { GET_COMMENT_POST, MODIFY_COMMENT_POST, WRITE_COMMENT_POST } from "../actions"


const initialState = {
    allComment: [],
    myComment: []
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_COMMENT_POST: {
            return {
                ...state,
                allComment: action.payload
            }
        }
        
        case WRITE_COMMENT_POST: {
            return {
                allComment: [...state.allComment, action.payload],
                myComment: action.payload
            }
        }
        case MODIFY_COMMENT_POST: {
            return {
                allComment: state.allComment.filter(commment => commment._id === action.payload._id),
                myComment: action.payload
            }
        }

        default: {
            return state
        }
    }
}