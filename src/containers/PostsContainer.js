import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { viewPost } from '../actions'
import PostsList from '../components/PostsList'
import PostItem from '../components/PostItem'

const PostsContainer = ({ posts, current, viewPost }) => (
  <PostsList title="Posts">
    {current ? <div>current: {current.title}</div> : ''}
    {posts.map(post =>
      <PostItem post={post} key={post.id} onView={() => viewPost(post)}></PostItem>
    )}
  </PostsList>
)

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  viewPost: PropTypes.func.isRequired
}

// This is compare ...mapState in vue
const mapStateToProps = state => ({
  posts: state.post.items,
  current: state.post.current
})

export default connect(
  mapStateToProps,
  // This is compare ...mapActions in vue
  { viewPost }
)(PostsContainer)
