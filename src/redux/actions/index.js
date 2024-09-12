
export const TAKE_MY_PROFILE = 'TAKE_MY_PROFILE'
export const TAKE_ALL_PROFILE = 'TAKE_ALL_PROFILE'
export const TAKE_ID_PROFILE = 'TAKE_ID_PROFILE'
export const MODIFY_MY_PROFILE = 'MODIFY_MY_PROFILE'
export const TAKE_EXP = 'TAKE_EXP'
export const ADD_NEW_EXP = 'ADD_NEW_EXP'
export const TAKE_SPECIFIC_EXP = 'TAKE_SPECIFIC_EXP'
export const MODIFY_MY_EXP = 'MODIFY_MY_EXP'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const CREATE_NEW_POST = 'CREATE_NEW_POST'
export const MODIFY_POST = 'MODIFY_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_SEARCH = 'GET_SEARCH'
export const GET_COMPANY = 'GET_COMPANY'
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_COMMENT_POST = 'GET_COMMENT_POST'
export const WRITE_COMMENT_POST = 'WRITE_COMMENT_POST'
export const MODIFY_COMMENT_POST = 'MODIFY_COMMENT_POST'


// PROFILE ------------------------------------------

export const getProfile = (query, myAction) => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${query}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            if (response.ok) {
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
        catch (error) {
            console.log(error)

        }
    }
}

export const modifyProfile = (objectToModify) => {

    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(objectToModify)


            })
            if (response.ok) {
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
        catch (error) {
            console.log(error)

        }
    }
}

// EXPERIENCES ----------------

export const getExperiences = (id, myAction, idExp = '') => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            if (response.ok) {
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
        catch (error) {
            console.log(error)

        }
    }
}

export const postExperience = (id, objectToModify) => {

    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(objectToModify)


            })
            if (response.ok) {
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
        catch (error) {
            console.log(error)

        }
    }
}

export const modifyExperience = (id, idExp, objectToModify) => {

    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(objectToModify)


            })
            if (response.ok) {
                const object = await response.json()
                dispatch({
                    type: MODIFY_MY_EXP,
                    payload: object
                })
            }
            else {
                alert('Errore Fetch')

            }
        }
        catch (error) {
            console.log(error)

        }
    }
}

export const deleteExperience = (id, idExp) => {

    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },



            })
            if (response.ok) {
                const object = await response.json()
                dispatch({
                    type: MODIFY_MY_EXP,
                    payload: object
                })
            }
            else {
                alert('Errore Fetch')

            }
        }
        catch (error) {
            console.log(error)

        }
    }
}

// POST ----------

export const getOrModifyPost = (myMethod = 'GET', myAction = GET_ALL_POSTS, objectToModify = '', postID = '') => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/posts/${postID}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYThmZjRkMGRlZjAwMTVjZWYwZjYiLCJpYXQiOjE3MjU4NjgyODcsImV4cCI6MTcyNzA3Nzg4N30.R3sQ4ptlB6MhqVmb4haRgAbtRRjSLZtgviETuqd4rO0'
        try {
            const response = await fetch(myUrl, {
                method: myMethod,
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },


                ...((myMethod !== 'GET' && myMethod !== 'DELETE') && { body: JSON.stringify(objectToModify) })
            })

            if (response.ok) {
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
        catch (error) {
            console.log(error)

        }
    }
}

// JOB ------------

export const getSearch = ( query ) => {
    return async (dispatch, getState) => {
        const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
        try {
            const response = await fetch (myUrl)
            if(response.ok){
                const {data} = await response.json()
                dispatch({
                    type: GET_SEARCH,
                    payload: data
                })
            }
            else {
                alert ('Errore nella Fetch')
            }
        }
        catch (error) {
            console.log(error)

        }
    }
}
export const getCompany = ( query ) => {
    return async (dispatch, getState) => {
        const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?company=${query}`
        try {
            const response = await fetch (myUrl)
            if(response.ok){
                const {data} = await response.json()
                dispatch({
                    type: GET_COMPANY,
                    payload: data
                })
            }
            else {
                alert ('Errore nella Fetch')
            }
        }
        catch (error) {
            console.log(error)

        }
    }
}
export const getCategory = ( query ) => {
    return async (dispatch, getState) => {
        const myUrl = `https://strive-benchmark.herokuapp.com/api/jobs?category=${query}&limit=10`
        try {
            const response = await fetch (myUrl)
            if(response.ok){
                const {data} = await response.json()
                dispatch({
                    type: GET_CATEGORY,
                    payload: data
                })
            }
            else {
                alert ('Errore nella Fetch')
            }
        }
        catch (error) {
            console.log(error)

        }
    }
}

export const takeComments = () => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/comments/`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYTBkZDU0M2E0YzAwMTU5MDFkZmIiLCJpYXQiOjE3MjYxMjgzNDksImV4cCI6MTcyNzMzNzk0OX0.5FrJw7Z8uGN3muC9bnpUEZlfusI8TbD7sfnwiHYJGWA'
        try {
            const response = await fetch(myUrl, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            if (response.ok) {
                const arrayObj = await response.json()
                dispatch({
                    type: GET_COMMENT_POST,
                    payload: arrayObj
                })
            }
            else {
                alert('Errrore Fetch')

            }
        }
        catch (error) {
            console.log(error)

        }
    }
}
export const addComment = (idPost, comment, rate = '1') => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/comments/`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYTBkZDU0M2E0YzAwMTU5MDFkZmIiLCJpYXQiOjE3MjYxMjgzNDksImV4cCI6MTcyNzMzNzk0OX0.5FrJw7Z8uGN3muC9bnpUEZlfusI8TbD7sfnwiHYJGWA'
        try {
            const response = await fetch(myUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment: comment,
                    rate: rate,
                    elementId: idPost
                })
                
            })
            if (response.ok) {
                const arrayObj = await response.json()
                dispatch({
                    type: WRITE_COMMENT_POST,
                    payload: arrayObj
                })
            }
            else {
                alert('Errrore Fetch')

            }
        }
        catch (error) {
            console.log(error)

        }
    }
}
export const modifyComment = (idComment, comment) => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/comments/${idComment}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYTBkZDU0M2E0YzAwMTU5MDFkZmIiLCJpYXQiOjE3MjYxMjgzNDksImV4cCI6MTcyNzMzNzk0OX0.5FrJw7Z8uGN3muC9bnpUEZlfusI8TbD7sfnwiHYJGWA'
        try {
            const response = await fetch(myUrl, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment: comment,
                })
                
            })
            if (response.ok) {
                const arrayObj = await response.json()
                dispatch({
                    type: MODIFY_COMMENT_POST,
                    payload: arrayObj
                })
            }
            else {
                alert('Errrore Fetch')

            }
        }
        catch (error) {
            console.log(error)

        }
    }
}
export const deleteComment = (idComment) => {
    return async (dispatch, getState) => {
        const myUrl = `https://striveschool-api.herokuapp.com/api/comments/${idComment}`
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyYTBkZDU0M2E0YzAwMTU5MDFkZmIiLCJpYXQiOjE3MjYxMjgzNDksImV4cCI6MTcyNzMzNzk0OX0.5FrJw7Z8uGN3muC9bnpUEZlfusI8TbD7sfnwiHYJGWA'
        try {
            const response = await fetch(myUrl, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json'
                },
               
        
            })
            if (response.ok) {
                const arrayObj = await response.json()
                dispatch({
                    type: MODIFY_COMMENT_POST,
                    payload: arrayObj
                })
            }
            else {
                alert('Errrore Fetch')

            }
        }
        catch (error) {
            console.log(error)

        }
    }
}
