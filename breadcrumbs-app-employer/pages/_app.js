import '../styles/globals.css'
import Header from '../components/Layout/Header';
import BottomNav from '../components/Layout/BottomNavigation';

import { providers, signIn, signOut, useSession, Provider } from 'next-auth/client';
import button from './Authentification/login';
import LoginPage from './Authentification/login';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    
    <div className="container">
    <BottomNav/>
        <Header />
        <main>
        <Provider session={pageProps.session} >
            <Component {...pageProps} />
        </Provider>
      </main>
    </div>
    </>
  )
}

export default MyApp
