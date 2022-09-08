
const SET_AUTH = 'SET-AUTH'
const SET_LOGOUT = 'SET-LOGOUT'

const initialState = {
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH: 
			return {
				...state,
				isAuth: true
			}
		case SET_LOGOUT:
			return {
				...state,
				isAuth: false
			}
		default:
			return state
	}
}

export const setAuth = () => {
	return {
		type: SET_AUTH
	}
}

export const setLogout = () => {
	return {
		type: SET_LOGOUT
	}
}

export default authReducer







