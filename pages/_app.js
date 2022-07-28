import '../styles/globals.css'
import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'


function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      <Navbar />
      <Search />
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
