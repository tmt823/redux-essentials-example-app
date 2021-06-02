import { configureStore } from '@reduxjs/toolkit'

import postsReducers from '../features/posts/postsSlice'
import usersReducers from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers
  }
})
