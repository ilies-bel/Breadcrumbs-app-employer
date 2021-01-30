import Head from 'next/head'
import styles from '../styles/Home.module.css'

import BottomNav from '../components/Layout/BottomNavigation'
import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breadcumbs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>

      </Header>
      <main className={styles.main}>
        Accueil
      </main>

      <BottomNav>
        
      </BottomNav>
    </div>
  )
}
