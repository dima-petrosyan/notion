import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import postsReducer from './reducers/postsReducer.js'
import authReducer from './reducers/authReducer.js'

const reducers = combineReducers({
	postsPage: postsReducer,
	authPage: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store