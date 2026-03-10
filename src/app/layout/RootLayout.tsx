import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { AIChatbot } from '../components/AIChatbot';
import { SkipToContent } from '../components/SkipToContent';
import { PromoBanner } from '../components/PromoBanner';

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkipToContent />
      <ScrollToTop />
      <PromoBanner />
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <Outlet />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}