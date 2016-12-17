import * as types from '../constants'

// This is compare with mutations in vue.
function receivePosts (items) {
	return {
		type: types.RECEIVE_POST,
		posts: items
	}
}

function viewPostUnsafe (post) {
  return {
    type: types.VIEW_POST,
    text: 'View post',
    post: post
  }
}

// This is compare with action in vue
export const getAllPosts = () => dispatch => {
  const posts = [
    {id: 1, title: 'A'},
    {id: 2, title: 'B'}
  ]
  dispatch(receivePosts(posts))
}

export const viewPost = post => dispatch => {
  dispatch(viewPostUnsafe(post))
}
