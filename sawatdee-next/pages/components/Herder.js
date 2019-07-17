import Link from 'next/link'

const styleHerder = {
background: '#FFFFFF',
width:'100%',
height:'10%'
}

const stylelogo = {
  position: 'absolute',
  background: '#36B0C8',
  width:'25%'
}

const Header = () => (
  <div style={styleHerder}>
    <Link href="/">
    <div style={stylelogo}>
      <a><img src={'../../public/Photo/E-XPENSE.png'}></img></a>
    </div>
    </Link>
  </div>
)

export default Header