import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileFetchs";
import { experiencesReducers } from "../reducers/experiencesFetch";

const allReducers = combineReducers({
    profile: profileReducers,
    experience: experiencesReducers
})

const store = configureStore({
    reducer: allReducers
})

export default store