import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TrustStrip } from './components/TrustStrip';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <Benefits />
        <TrustStrip />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
