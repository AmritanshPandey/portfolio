import Header from './Header/Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
});


export const metadata = { title: 'Portfolio' };

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
   <main className={montserrat.variable}>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </main>
  );
}