import Head from 'next/head'

import BottomNav from '../../components/Layout/DrawerLeft'
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