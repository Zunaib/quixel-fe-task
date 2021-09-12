import { Col, Row, Spin } from 'antd';
import { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/common/Layout';
import { AddBlog } from './views/AddBlog';
import Blogs from './views/Blogs';
import BlogView from './views/BlogView';

const Common: FC = () => {
  return (
    <Suspense
      fallback={
        <Row justify="center">
          <Col>
            <Spin size="large" />
          </Col>
        </Row>
      }
    >
      <AppLayout>

        <Switch>
          <Route exact path="/">
            <Blogs />
          </Route>
          <Route exact path="/addBlog">
            <AddBlog />
          </Route>
          <Route exact path="/blog/:id">
            <BlogView />
          </Route>
        </Switch>
      </AppLayout>
    </Suspense>
  );
};

export default Common;
