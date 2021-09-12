import { Divider, PageHeader, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { Fragment, useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { addToBlogs } from '../globalState/blogs/blogsSlice';
import AddBlogForm from '../components/Blog/AddBlogForm';

const AddBlog = () => {

  const dispatch = useAppDispatch();

  const [blog, setBlog] = useState({
    id: uuidv4(),
    title: "",
    imageURL: "",
    content: ""
  })

  const saveBlogHandler = () => {
    if (
      blog.title !== "" &&
      blog.content !== "" &&
      blog.imageURL !== ""
    ) {
      dispatch(addToBlogs(blog));
      setBlog({
        id: uuidv4(),
        title: "",
        imageURL: "",
        content: ""
      })
      message.success("Blog Added Successfully")
    }
    else {
      message.error("Please fill out the form.")
    }
  }

  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        title="Add Blog"
      />
      <Divider />
      <AddBlogForm blog={blog} saveBlogHandler={saveBlogHandler} setBlog={setBlog} />
    </Fragment>
  )
}

export { AddBlog };
