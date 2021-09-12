import { Layout, Menu, Image } from 'antd';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {

  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="app-layout">
      <Header className="header">
        <Link to="/">
          <div className="header-logo" >
            <Image
              preview={false}
              src="https://d3uwib8iif8w1p.cloudfront.net/quixel/icons/quixelHeader.png"
              alt="Quixel Logo" />
          </div>
        </Link>
        <Menu className="header-links" theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/" >
              Blogs
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/addBlog" >
              Add Blog
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">
          {children}
        </div>
      </Content>
      <Footer className="footer">Quixel - Front End Task</Footer>
    </Layout>
  )
}

export default AppLayout
