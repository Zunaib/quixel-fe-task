import { useEffect } from 'react'
import { Col, Image, Row, Typography } from 'antd'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { setOpenedBlog } from '../globalState/blogs/blogsSlice';
import { BlogParams, IBlog } from '../interfaces/Blog';



function BlogView() {

  const dispatch = useAppDispatch();
  const { id } = useParams<BlogParams>();

  useEffect(() => {
    dispatch(setOpenedBlog(id))
  })

  const { Text, Title } = Typography
  const blog = useAppSelector<IBlog>((state: RootState) => state.blogsData.openedBlog)

  return (
    <Fragment>
      <Row className="blog-view">
        <Col span={24}>
          <Row justify="center">
            <Col
              xs={24} sm={24} md={22} lg={20} xl={18} xxl={14}
              className="blog-image-col">
              <Image
                className="blog-image"
                preview={false}
                src={blog.imageURL}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Title className="blog-title" >{blog.title}</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col
              className="blog-content-col"
              xs={24} sm={24} md={22} lg={22} xl={22} xxl={18}>
              <Text >
                {blog.content}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default BlogView
