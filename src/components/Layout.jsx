import { useSelector } from 'react-redux'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({children}) => {
	const { mode } = useSelector(state => state.mode)
  return (
    <div className={mode ? 'dark' : ''}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout