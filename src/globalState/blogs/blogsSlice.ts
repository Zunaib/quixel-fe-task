import { createSlice } from '@reduxjs/toolkit'
import { IBlog } from '../../interfaces/Blog'

export interface CounterState {
  blogs: IBlog[],
  openedBlog: IBlog
}

const initialState: CounterState = {
  blogs: [],
  openedBlog: {
    id: "", title: "", imageURL: "", content: ""
  }
}

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addToBlogs: (state, payload) => {
      state.blogs = [...state.blogs, payload.payload]
    },
    setOpenedBlog: (state, payload) => {
      state.openedBlog = state.blogs.filter(
        (blog: IBlog) => blog.id === payload.payload, []
      )[0]
    },
  },
})

export const { addToBlogs, setOpenedBlog } = blogsSlice.actions

export default blogsSlice.reducer;