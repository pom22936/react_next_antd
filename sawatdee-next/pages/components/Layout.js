import Header from './Herder'
import Footer from './Footer'
import Sidebar from './sidebar'

const Layout = (props) => (
  <div>
    <Header />
    <Sidebar />
    {props.children}
    <Footer />
  </div>
)

export default Layout