import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderFooterLayoutProps from '@/types/HeaderFooterLayout.types';

export default function HeaderFooterLayout({ children }: HeaderFooterLayoutProps) {
  return <>
    <Header />
    { children }
    <Footer />
  </>
}