import { postsAPI } from './../../components/API/API.js'

const SET_POSTS = 'SET-POSTS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

const initialState = {
	posts: [],
	isFetching: true
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSTS: 
			return {
				...state,
				posts: action.posts
			}
		case TOGGLE_IS_FETCHING: 
			return {
				...state,
				isFetching: action.isFetching
			}
		default: 
			return state
	}
}

export const setPosts = (posts) => {
	return {
		type: SET_POSTS,
		posts
	}
}

export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export const getPosts = () => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		postsAPI.getData().then(posts => {
			dispatch(setPosts(posts))
			dispatch(toggleIsFetching(false))
		})
	}
}

export default postsReducer















