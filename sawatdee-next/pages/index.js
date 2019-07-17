import Head from 'next/head'
import { Layout } from 'antd';
import { Carousel, Card, Row, Col, Rate } from 'antd'
import MyHerder from '../components/Header'
import MyFooter from '../components/Footer'

const { Header, Footer, Sider, Content } = Layout;

export default () => (
  <div>
    <Layout>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
        <MyHerder />
      </Head>
      <Content>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
          <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
          <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
          <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
        </Row>

      </Content>

      <Footer>
          <MyFooter />
      </Footer>
    </Layout>
    
   

    <style jsx global>{`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #367279;
    overflow: hidden;
  }
      
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
  .custom-image img {
    isplay: block;
  }
  .custom-card {
    padding: 10px 16px;
  }
  .custom-card p {
    color: #999;
  }
`}</style>

  </div>
)