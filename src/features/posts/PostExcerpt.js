import React from 'react'
import { Link } from 'react-router-dom'

import {PostAuthor} from '../users/PostAuthor'
import {TimeAgo} from './TimeAgo'
import {ReactionButtons} from './ReactionButtons'

export const PostExcerpt = ({key, post}) => {
  return (
    <article className='post-excerpt' key={key}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  )
}