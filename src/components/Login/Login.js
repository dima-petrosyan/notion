import React from 'react'
import style from './Login.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setAuth } from './../../Redux/reducers/authReducer.js'
import { Navigate } from 'react-router-dom'

function Login(props) {

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (login === 'dima' && password === '12345') {
			props.setAuth()
		} else {
			setError(true)
		}
		resetInputs()
	}

	const resetInputs = () => {
		setLogin('')
		setPassword('')
	}

	if (props.isAuth) {
		return <Navigate to='/posts' />
	}

	return (
		<div className={style.container}>	
			<div className={style.login}>
				<h1 className={style.title}>Authorization</h1>
				<form onSubmit={handleSubmit} className={style.form}>
					<div>
						<h1>login</h1>
						<input className={error ? style.errorInput : style.input} value={login} onChange={(event) => setLogin(event.target.value)} placeholder='Login' type="text" />
					</div>
					<div>
						<h1>password</h1>
						<input className={error ? style.errorInput : style.input} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' type="password" />
					</div>
					{
						error && <div className={style.summaryError}>Incorrect login or password</div>
					}
					<button>Submit</button>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authPage.isAuth
	}
}

export default connect(mapStateToProps, { setAuth })(Login)











