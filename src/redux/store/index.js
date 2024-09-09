import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileFetchs";

const allReducers = combineReducers({
    profile: profileReducers
})

const store = configureStore({
    reducer: allReducers
})

export default store