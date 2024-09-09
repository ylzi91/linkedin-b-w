import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileFetchs";
import { experiencesReducers } from "../reducers/experiencesFetch";
import postReducers from "../reducers/postFetch";

const allReducers = combineReducers({
    profile: profileReducers,
    experience: experiencesReducers,
    post: postReducers,

})

const store = configureStore({
    reducer: allReducers
})

export default store