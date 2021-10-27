import 'tailwindcss/tailwind.css'
import './style.css'
import { ProviderAPI } from '../components/ContextProvider'

function MyApp({ Component, pageProps }) {
  return (
  <ProviderAPI>
    <Component {...pageProps} /> 
  </ProviderAPI>
  )
}

export default MyApp
