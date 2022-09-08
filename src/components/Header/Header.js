import React from 'react'
import style from './Header.module.css'
import logoXS from './../../assets/logoXS.svg'
import login from './../../assets/login.svg'
import { NavLink } from 'react-router-dom'
import { setLogout } from './../../Redux/reducers/authReducer.js'
import { connect } from 'react-redux'

function Header(props) {
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<img src={logoXS} alt="Logo" />
				<h1 className={style.logoText}>Каналсервис</h1>
			</div>
			<div className={style.login}>
				{
					props.isAuth && <h1>Dima</h1>
				}
				<NavLink to='/login' onClick={() => props.setLogout()}>
					<img src={login} alt="Login" />
				</NavLink>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authPage.isAuth
	}
}

export default connect(mapStateToProps, {setLogout})(Header)