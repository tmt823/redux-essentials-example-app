import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {PostAuthor} from '../users/PostAuthor'
import {TimeAgo} from './TimeAgo'
import {ReactionButtons} from './ReactionButtons'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  ))

  return (
    <section className='post-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}