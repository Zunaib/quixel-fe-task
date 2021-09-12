import { Form, Row, Col, Input, Button, Image } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IBlog } from '../../interfaces/Blog';
import { IPicsumImage } from '../../interfaces/PicsumImage';

export interface IAddBlogForm {
  blog: IBlog,
  saveBlogHandler: () => void,
  setBlog: (e: any) => void,

}

const AddBlogForm = ({ blog, saveBlogHandler, setBlog }: IAddBlogForm) => {

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=" + getRandomInt(1, 50) + "&limit=3")
      .then((res) => setRandomImages(res.data))
  }, [])

  return (
    <Form onFinish={saveBlogHandler}>
      <Row justify="center">
        <Col xl={22} xxl={20}>
          <Row>
            <Col span={24}>
              <Form.Item label="Title" >
                <Input
                  value={blog.title}
                  onChange={
                    (e) => setBlog({ ...blog, title: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Thumbnail">
                <Image.PreviewGroup>
                  <Row gutter={[12, 12]} justify="center">
                    {
                      randomImages.map((randImg: IPicsumImage) => (
                        <Col span={8} key={randImg.id} className="thumbnail-col" >
                          <Image
                            className={`thumbnail ${blog.imageURL === randImg.download_url && "selected"}`}
                            preview={false}
                            src={randImg.download_url}
                            onClick={() => setBlog({ ...blog, imageURL: randImg.download_url })}
                          />
                        </Col>
                      ))
                    }
                  </Row>
                </Image.PreviewGroup>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Content">
                <Input.TextArea
                  rows={4}
                  value={blog.content}
                  onChange={
                    (e) => setBlog({ ...blog, content: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default AddBlogForm;
