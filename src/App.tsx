import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationFocus } from './components/EducationFocus';
import { WhatWeAreExploring } from './components/WhatWeAreExploring';
import { About } from './components/About';
import { ComingSoon } from './components/ComingSoon';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';

export const App: React.FC = () => {
  const isNotFound =
    typeof window !== 'undefined' &&
    window.location.pathname !== '/' &&
    window.location.pathname !== '' &&
    window.location.pathname !== '/index.html';

  if (isNotFound) {
    return <NotFound />;
  }
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-cyan focus:text-slate-950 focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <EducationFocus />
        <WhatWeAreExploring />
        <About />
        <ComingSoon />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
