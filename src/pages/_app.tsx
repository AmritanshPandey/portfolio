import '../styles/global.css';
import '../styles/typography.css';
import '../styles/image.css';
import '../styles/utility.css'
import Layout from '@/components/global/Layout';
import type { AppProps } from 'next/app';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
      <Analytics />
    </main>
  );
}