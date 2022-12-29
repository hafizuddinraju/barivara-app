
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Shared/Footer/Footer';
import { store } from '../store';
import {SessionProvider} from 'next-auth/react'
import '../styles/globals.css'

export default function App({ Component, pageProps, session }) {
  return (
   <SessionProvider session={session}>
     <Provider store={store}>
    <Navbar></Navbar>
    <Component {...pageProps}/>
    <Footer></Footer>
    </Provider>
   </SessionProvider>
  );
    
}
