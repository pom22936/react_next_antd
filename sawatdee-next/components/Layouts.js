import Head from 'next/head'
import { Layout,Menu, Breadcrumb, Icon } from 'antd';
import MyHerder from '../components/Header'
import MyFooter from '../components/Footer'
import MySidebar from '../components/Sidebar'
import React,{Component} from "react";
import Stock from "../Services/Stock";

const { Header, Footer, Sider, Content } = Layout;

export default class Layouts extends Component {
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
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <MyFooter stock={Stock}/>
          </Footer>
        </Layout>
      </Layout>

      {/* <style jsx global>{`
        .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
        aside{
          position: fixed;
          height: -webkit-fill-available;
          max-height: 100%;
        }
      `}</style> */}
      
      </div>
    )
  }
}

