import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import React from "react"
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { useRouter } from 'next/router'
import { Spin } from 'antd';
import { Row } from 'antd'
import Loading from '../components/loading'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <Provider store={store}>
      <Layout>
        {
          pageLoading
            ?
            <Loading/>
            :
            <Component {...pageProps} />
        }
      </Layout>
    </Provider>

  )
}

export default MyApp
