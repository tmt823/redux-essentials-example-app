import { configureStore } from '@reduxjs/toolkit'

import postsReducers from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducers
  }
})
