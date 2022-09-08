import React, { useContext, useEffect } from 'react'
import Post from './Post/Post.js'
import style from './Posts.module.css'
import { getPosts } from './../../Redux/reducers/postsReducer.js'
import { connect } from 'react-redux'
import { postsAPI } from './../API/API.js'

class Posts extends React.Component {

	componentDidMount() {
		this.props.getPosts()
	}

	render() {
		return (
			<div className={style.posts}>
				{
					this.props.posts.map(post => {
						return <Post key={post.id} imageUrl={post.photoUrl} 
									 author={post.author} company={post.company}
									 title={post.title} body={post.body} />
					})
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.postsPage.posts,
	}
}

export default connect(mapStateToProps, {getPosts})(Posts)