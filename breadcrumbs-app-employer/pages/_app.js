import '../styles/globals.css'
import Header from '../components/Layout/Header';
import BottomNav from '../components/Layout/BottomNavigation';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <div className="container">
    <BottomNav/>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
    </>
  )
}

export default MyApp
