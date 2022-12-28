import { Provider } from 'react-redux'
import '../styles/globals.css'
import { store } from '../src/redux/store'
import Layout from '../src/components/Layout'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Layout><Component {...pageProps} /></Layout></Provider>
}

export default MyApp
