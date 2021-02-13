import '../styles/globals.css'
import Header from '../components/Layout/Header';
import BottomNav from '../components/Layout/BottomNavigation';

import { providers, signIn, signOut, useSession } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const [ session, loading ] = useSession();
  console.log(Object.values(providers))
  return (
    <>
    <Header/>
    <div className="container">
    <BottomNav/>
      <main>
      {!session ? <button onClick={() => signIn()}>Sign in</button> :  <div><p>Signed in as {session.user.email}</p><button onClick={() => signOut()}>Sign out</button></div>}
        <Component {...pageProps} />
      </main>
    </div>
    </>
  )
}

export default MyApp
