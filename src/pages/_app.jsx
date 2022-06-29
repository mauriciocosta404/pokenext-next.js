import '../../styles/globals.css'
import Header from '../components/header/Header'
import MainContainer from '../components/mainContainer/MainContainer'

function MyApp({ Component, pageProps }) {
  return (<>
    <MainContainer>
        <Component {...pageProps} />
    </MainContainer>
    </>
    )
  }

export default MyApp
