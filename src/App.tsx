import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Solutions } from './components/Solutions';
import { WhyVeyora } from './components/WhyVeyora';
import { About } from './components/About';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ScrollProgress } from './components/ScrollProgress';
import { siteConfig, type ProductItem } from './config/site';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Check URL hash on initial mount or hash change for deep product linking
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#product-')) {
        const productId = hash.replace('#product-', '');
        const matched = siteConfig.products.find((p) => p.id === productId);
        if (matched) {
          setSelectedProduct(matched);
        }
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const isNotFound =
    typeof window !== 'undefined' &&
    window.location.pathname !== '/' &&
    window.location.pathname !== '' &&
    window.location.pathname !== '/index.html';

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-brand-dark text-neutral-900 flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-cyan focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Navigation Bar & Scroll Progress */}
      <Navbar />
      <ScrollProgress />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Products */}
        <Products onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 3. Education Ecosystem / Who We Serve */}
        <Solutions />

        {/* 4. Why Veyora Labs */}
        <WhyVeyora />

        {/* 5. About Veyora Labs */}
        <About />

        {/* 6. Vision & Roadmap */}
        <Vision />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Deep-Dive Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default App;
