import '../styles/globals.css';
import Layout from '@/components/global/Layout';
import type { AppProps } from 'next/app';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}