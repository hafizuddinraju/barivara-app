
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Shared/Footer/Footer';

import {SessionProvider} from 'next-auth/react'
import './styles/globals.css'
import { store } from '../store';

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
