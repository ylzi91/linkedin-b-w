import { ADD_NEW_EXP, MODIFY_MY_EXP, TAKE_EXP, TAKE_SPECIFIC_EXP } from "../actions"

const initialState = {
    allExperiences: [],
    newExperience: {},
    specificExperience: {}

}

export const experiencesReducers = (state = initialState, action) => {
    switch(action.type) {

        case MODIFY_MY_EXP: {
            return {
                ...state,
                allExperiences: state.allExperiences.filter(exp => exp._id === action.payload._id)
            }
        }

        case TAKE_SPECIFIC_EXP: {
            return {
                ...state,
                specificExperience: action.payload
            }
        }

        case TAKE_EXP: {
            return {
                ...state,
                allExperiences: action.payload
            }
        }
        case ADD_NEW_EXP: {
            return {
                ...state,
                allExperiences: [...state.allExperiences, action.payload],
                newExperience: action.payload
            }
        }

        default: {
            return state
        }
    }
}
    