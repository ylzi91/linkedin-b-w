import { CREATE_NEW_POST, GET_ALL_POSTS, MODIFY_POST } from "../actions";

const initialState = {
    allPosts: [],
    newPost: {},
    myPosts: [],
    modifiedPost: {}
}

const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case MODIFY_POST: {
            return {
                ...state,
                allPosts: state.allPosts.filter(post => post._id === action.payload._id),
                modifiedPost: action.payload

            }
        }

        case CREATE_NEW_POST: {
            return {
                ...state,
                allPosts: [...state.allPosts, action.payload],

            }
        }

        case GET_ALL_POSTS: {
            return {
                ...state,
                allPosts: action.payload
            }
        }

        default: {
            return state
        }
    }

}

export default postReducers;