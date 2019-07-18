import { Layout,Menu, Breadcrumb, Icon } from 'antd';
import Link from 'next/link'
import Avatar from 'react-avatar';


const { Sider } = Layout;
const { SubMenu } = Menu;

const mylogo = {
    color: '#fff',
    textAlign: 'center',
}

const image_ava = {
    paddingTop: '10px',
    paddingLeft: '45px'
}


export default class MySidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            size:100
        };
    }
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });

        if(this.state.collapsed){
            this.setState({
             size:this.state.size = 100
            })
        }else{
            this.setState({
                size:this.state.size = 20
            })
        }

      };

    render() {
        return (
            <div>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div style={image_ava}><Avatar facebookId="100002504877412" size={this.state.size} round={true} /></div>
                    <div className="logo"><h1 style={mylogo}>PALM</h1></div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                        <Icon type="home" />
                        <Link href="/">
                            <span><a style={{color:'#fff'}}>Home Page</a></span>
                        </Link>
                        </Menu.Item>

                        <Menu.Item key="2">
                        <Icon type="user" />
                        <Link href="/about">
                            <span > <a style={{color:'#fff'}}>About Me</a> </span>
                        </Link>
                        </Menu.Item>

                        <SubMenu
                        key="sub1"
                        title={
                            <div>
                            <Icon type="code" />
                            <span>Skills</span>
                            </div>
                        }
                        >
                        <Menu.Item key="3">
                            <Link href="./Front_skill">
                                <span> <a style={{color:'#fff'}}>Front-Ent</a>  </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link href="./back_skill">
                            <span> <a style={{color:'#fff'}}>Back-Ent</a> </span>
                            </Link>
                        </Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="project" />
                            <span>Certificate</span>
                            </span>
                        }
                        >
                        <Menu.Item key="6">
                            <Link href="./Front_cert">
                            <span> <a style={{color:'#fff'}}>Front-Ent Certificate</a> </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link href="./back_cert">
                            <span> <a style={{color:'#fff'}}>Back-Ent Certificate</a> </span>
                            </Link>
                        </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="mail" />
                            <Link href="/context">
                            <span><a style={{color:'#fff'}}>Context Me</a> </span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

            </div>
        )
    }
}