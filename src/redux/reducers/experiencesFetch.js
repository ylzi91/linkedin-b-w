import { ADD_NEW_EXP, TAKE_EXP } from "../actions"

const initialState = {
    allExperiences: [],
    newExperience: {} 
}

export const experiencesReducers = (state = initialState, action) => {
    switch(action.type) {

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
    