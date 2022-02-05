import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import LayoutApp from 'components/Layout/LayoutApp'
import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutTenant from 'components/Layout/LayoutTenant'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  let Layout = LayoutPublic
  if (pathname.indexOf('/app') === 0) {
    Layout = LayoutApp
  }
  if (pathname.indexOf('/[slug]') === 0) {
    Layout = LayoutTenant
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
