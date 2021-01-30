import Head from 'next/head'

import BottomNav from '../../components/Layout/BottomNavigation'
import Header from '../../components/Layout/Header'

export default function Office() {
  return (
    <>
      <Head>
        <title>Breadcumbs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        Office
      </main>

      <BottomNav/>
    </>
  )
}