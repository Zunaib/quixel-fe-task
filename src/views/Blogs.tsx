import { Col, Divider, PageHeader, Row, Typography } from 'antd';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import BlogCard from '../components/Blog/BlogCard';
import { setOpenedBlog } from '../globalState/blogs/blogsSlice';
import { IBlog } from '../interfaces/Blog';

const Blogs = () => {

  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state: RootState) => state.blogsData.blogs);

  const { Text } = Typography;

  const blogsExist = blogs.length > 0;

  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        title="All Blogs"
      />
      <Divider />
      <Row>
        <Col span={24}>
          <Row gutter={[24, 24]} justify="center">
            {
              blogsExist ? blogs?.map((blog: IBlog) => (
                <Col key={blog.id} xs={18} sm={12} md={8} lg={6} xl={4} xxl={3}>
                  <Link to={`/blog/${blog.id}`}>
                    <BlogCard
                      id={blog.id}
                      title={blog.title}
                      imageURL={blog.imageURL}
                      content={blog.content}
                      onClick={
                        (id: string) => dispatch(setOpenedBlog(id))
                      }
                    />
                  </Link>
                </Col>
              ))
                :
                <Col>
                  <Text>No Blogs Exist Yet.</Text>
                </Col>
            }
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Blogs
