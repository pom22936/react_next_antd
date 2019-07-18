import Head from 'next/head'
import { Layout, Menu , Breadcrumb, Icon } from 'antd';
import { Carousel, Card, Row, Col, Rate } from 'antd'
import MyHerder from '../components/Header'
import MyFooter from '../components/Footer'
import MySidebar from '../components/Sidebar'
import { Tree } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { TreeNode, DirectoryTree } = Tree;

class About extends React.Component {
  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  render() {
    return (
      <div>
        <Layout >
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.css' />
        </Head>
        <MySidebar/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0}} ><MyHerder/></Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff'}}>
              <Row gutter={24}>
                <Col span={12}>
                <h1>ABOUT ME</h1><hr/>
                <p>
                  <span>I am a student from Khon Kaen University, Nong Khai Campus. I have to learn new things and use them to develop myself. I will
try my best to complete the task.</span>
                </p><br/><br/>
                <h1>History</h1><hr/>
                <p>
                  <b>NAME : </b> <span>Phongsakon   Kanphakdi</span>
                </p>
                <p>
                  <b>NICKNAME : </b> <span>PALM</span>
                </p>
                <p>
                  <b>AGE : </b> <span>22 Year Old</span>
                </p>
                <p>
                  <b>Address : </b> <span> 35/1 Moo 2, Tambon Lamphu Mueng District Nongbua Lamphu</span>
                </p>
                <br/><br/>
                <h1>Skills</h1><hr/>
                <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
                  <TreeNode title="Front End" key="0-0">
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                  </TreeNode>
                  <TreeNode title="Back End" key="0-1">
                    <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                    <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                  </TreeNode>
                </DirectoryTree>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <MyFooter/>
          </Footer>
        </Layout>
      </Layout>

      <style jsx global>{`
        .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
        aside{
          height: -webkit-fill-available;
        }
      `}</style>

      </div>
    )
  }
}


export default About


