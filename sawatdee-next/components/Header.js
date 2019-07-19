import { Menu } from 'antd'
import Head from 'next/head'
import { Icon } from 'antd';
import React,{Component} from "react";

class MyHerder extends Component {
    render() {
        return (
            <div>
                <div>
                    <Head>
                        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.css' />
                    </Head>
                        <div className="header" style={{textAlign: 'right'}}>
                        <Menu mode="horizontal" theme="dark" >
                            <Menu.Item key="1">
                                <a href="https://www.facebook.com/profile.php?id=100002504877412"><Icon type="facebook" style={{ fontSize: 24, color: '#08c' }}/></a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href="https://www.facebook.com/profile.php?id=100002504877412"><Icon type="google" style={{ fontSize: 24, color: '#08c' }} /></a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="https://www.facebook.com/profile.php?id=100002504877412"><Icon type="twitter" style={{ fontSize: 24, color: '#08c' }} /></a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a href="https://www.facebook.com/profile.php?id=100002504877412"><Icon type="instagram" style={{ fontSize: 24, color: '#08c' }} /></a>
                            </Menu.Item>
                        </Menu>
                        </div>
                    </div>
            </div>
        )
    }
}

export default MyHerder


