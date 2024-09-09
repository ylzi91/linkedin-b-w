import { TAKE_MY_PROFILE, TAKE_ALL_PROFILE, TAKE_ID_PROFILE, MODIFY_MY_PROFILE } from "../actions"



const initialState = {
    myProfile: {},
    allProfiles: [],
    specificProfile: {}
}

const profileReducers = (state = initialState, action) => {
    switch(action.type) {
        
        case TAKE_MY_PROFILE: {
            return {
                ...state,
                myProfile: action.payload
            }
        }
        case TAKE_ALL_PROFILE: {
            return{
                ...state,
                allProfiles: action.payload
            }
        }
        case TAKE_ID_PROFILE: {
            return{
                ...state,
                specificProfile: action.payload
            }
        }
        case MODIFY_MY_PROFILE: {
            return{
                ...state,
                specificProfile: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export default profileReducers