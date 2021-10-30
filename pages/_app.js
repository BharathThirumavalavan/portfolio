import '../styles/globals.css'
import { ProviderAPI } from '../helper/ContextProvider'


function MyApp({ Component, pageProps }) {
  return (
    <ProviderAPI>
      <Component {...pageProps} />
    </ProviderAPI>
  )
}

export default MyApp
