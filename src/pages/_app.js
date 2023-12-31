import Footer from '@/components/app/Footer';
import Navbar from '@/components/app/Navbar';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
