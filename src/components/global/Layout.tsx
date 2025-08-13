import Header from './Header/Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className='main-container'>{children}</main>
      <Footer />
    </>
  );
}