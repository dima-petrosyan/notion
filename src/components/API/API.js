import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
})

const getUsers = () => {
	return instance.get('users')
		.then(response => response.data)
}

const getAllPosts = () => {
	return instance.get(`posts`)
		.then(response => response.data)
}

const getAllPhotos = () => {
	return instance.get(`photos`)
		.then(response => response.data)
}

const getPhotoById = (photos, id) => {
	return photos.filter(photo => photo.albumId === id)[0]
}

const getPostById = (posts, id) => {
	return posts.filter(post => post.userId === id)[0]
}

export const postsAPI = {
	getData() {
		return getAllPosts().then(posts => {
			return getAllPhotos().then(photos => {
				return getUsers().then(users => {
					const postsInfo = users.map(user => {
						const post = getPostById(posts, user.id)
						return {
							id: user.id,
							author: user.name,
							company: user.company.name,
							photoUrl: getPhotoById(photos, user.id).thumbnailUrl,
							title: post.title,
							body: post.body
						}
					})
					return postsInfo
				})
			})
		})	
	}
}



