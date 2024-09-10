import { GET_CATEGORY, GET_COMPANY, GET_SEARCH } from "../actions"

const initialState  = {
    querySearch: [],
    companySearch: [],
    categorySearch: []
}

export const jobReducer = (state = initialState, action) => {


    switch(action.type){

        case GET_SEARCH: {
            return {
                ...state, 
                querySearch: action.payload
            }
        }
        case GET_COMPANY: {
            return {
                ...state, 
                companySearch: action.payload
            }
        }
        case GET_CATEGORY: {
            return {
                ...state, 
                categorySearch: action.payload
            }
        }

        default: {
            return state
        }
    }

}