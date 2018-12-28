
import React from 'react'
import PropTypes from 'prop-types'
import { PostTemplate } from '../../templates/PostTemplate'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'category'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview