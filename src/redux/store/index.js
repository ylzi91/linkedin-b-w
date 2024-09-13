import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileFetchs";
import { experiencesReducers } from "../reducers/experiencesFetch";
import postReducers from "../reducers/postFetch";
import { jobReducer } from "../reducers/jobFetch";
import { commentReducer } from "../reducers/commentFetch";

const allReducers = combineReducers({
    profile: profileReducers,
    experience: experiencesReducers,
    post: postReducers,
    job: jobReducer,
    comment: commentReducer

})

const store = configureStore({
    reducer: allReducers
})

export default store