import { Card, Image, Typography } from 'antd'
import { IBlogCard } from '../../interfaces/Blog';



const BlogCard = ({ id, title, imageURL, content, onClick }: IBlogCard) => {

  const { Title, Paragraph } = Typography;

  return (
    <Card
      className="blog-card"
      hoverable
      onClick={() => onClick(id)}
      cover={
        <Image
          preview={false}
          className="blog-cover"
          alt="example"
          src={imageURL} />
      }
    >
      <Title
        level={5}
        ellipsis={{ rows: 1 }}
      >
        {title}
      </Title>
      <Paragraph
        ellipsis={{ rows: 2 }}
        className="description">
        {content}
      </Paragraph>
    </Card>
  )
}

export default BlogCard
