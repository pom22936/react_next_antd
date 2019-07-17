
import { Menu } from 'antd'
import Link from 'next/link'
import Head from 'next/head'

const MyHerder = () => (
    <div>
    <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
    </Head>
        <div className="header">
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="/">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="About">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </Menu.Item>
        </Menu>
        </div>
    </div>
)

export default MyHerder


