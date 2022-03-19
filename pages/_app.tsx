import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import React from "react"
import { Provider } from 'react-redux'
import { useStore } from './redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp
