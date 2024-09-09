import { useSelector } from "react-redux"

export const TAKE_MY_PROFILE = 'TAKE_MY_PROFILE'
export const TAKE_ALL_PROFILE = 'TAKE_ALL_PROFILE'
export const TAKE_ID_PROFILE = 'TAKE_ID_PROFILE'
export const MODIFY_MY_PROFILE = 'MODIFY_MY_PROFILE'
export const TAKE_EXP = 'TAKE_EXP'
export const ADD_NEW_EXP = 'ADD_NEW_EXP'

export const getProfile = ( query, myAction ) => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${query}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch (myUrl, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            if(response.ok) {
                const object = await response.json()
                dispatch({
                    type: myAction,
                    payload: object
                })
            }
            else {
                alert('Errrore Fetch')

            }
        }
        catch (error)
        {
            console.log(error)

        }
    }
}
export const modifyProfile = ( objectToModify ) => {

    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch (myUrl, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(objectToModify)

                
            })
            if(response.ok) {
                const object = await response.json()
                dispatch({
                    type: MODIFY_MY_PROFILE,
                    payload: object
                })
            }
            else {
                alert('Errore Fetch')

            }
        }
        catch (error)
        {
            console.log(error)

        }
    }
}

export const getExperiences = ( id, myAction ) => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch (myUrl, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            if(response.ok) {
                const object = await response.json()
                dispatch({
                    type: myAction,
                    payload: object
                })
            }
            else {
                alert('Errrore Fetch')

            }
        }
        catch (error)
        {
            console.log(error)

        }
    }
}

export const postExperience = (id, objectToModify ) => {

    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch (myUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(objectToModify)

                
            })
            if(response.ok) {
                const object = await response.json()
                dispatch({
                    type: ADD_NEW_EXP,
                    payload: object
                })
            }
            else {
                alert('Errore Fetch')

            }
        }
        catch (error)
        {
            console.log(error)

        }
    }
}