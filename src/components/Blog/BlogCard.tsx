import { Card, Image, Typography } from 'antd'

export interface BlogCardProps {
  id: string;
  title: string;
  imageURL: string;
  content: string;
  onClick: (id: string) => void;
}

const BlogCard = ({ id, title, imageURL, content, onClick }: BlogCardProps) => {

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
