export const TAKE_MY_PROFILE = 'TAKE_MY_PROFILE'
export const TAKE_ALL_PROFILE = 'TAKE_ALL_PROFILE'
export const TAKE_ID_PROFILE = 'TAKE_ID_PROFILE'

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