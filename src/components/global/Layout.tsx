import Header from './Header/Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import { Oxygen } from 'next/font/google';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // adjust as needed
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={oxygen.className}>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}