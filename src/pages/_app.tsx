import '../styles/globals.css';
import Layout from '@/components/global/Layout';
import type { AppProps } from 'next/app';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </main>
  );
}