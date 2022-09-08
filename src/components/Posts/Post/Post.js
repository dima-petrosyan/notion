import React from 'react'
import style from './Post.module.css'

function Post(props) {
	return (
		<div className={style.post}>
			<div className={style.header}>
				<img src={props.imageUrl} alt="Image" />
				<div>
					<h1>Author: {props.author}</h1>
					<h1>Company: {props.company}</h1>
				</div>
			</div>
			<div className={style.body}>
				<h1>Title: {props.title}</h1>
				<p>Body: {props.body}</p>
			</div>
		</div>
	)
}

export default Post