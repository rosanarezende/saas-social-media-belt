import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

import LayoutApp from 'components/Layout/LayoutApp'
import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutTenant from 'components/Layout/LayoutTenant'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { pathname } = useRouter()

  let Layout = LayoutPublic

  if (pathname.includes('/app')) {
    Layout = LayoutApp
  }

  // if (pathname.includes('/[slug]')) {
  //   Layout = LayoutTenant
  // }

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
