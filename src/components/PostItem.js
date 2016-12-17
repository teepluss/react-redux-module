import React, { PropTypes } from 'react'

const PostItem = ({ post, onView }) => (
  <div>
    <div onClick={onView}>{post.id}</div>
  </div>
)

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  onView: PropTypes.func.isRequired
}

export default PostItem
