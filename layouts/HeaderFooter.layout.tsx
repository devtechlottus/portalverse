import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function HeaderFooterLayout({ children }: any) {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}