
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Generator from './components/Generator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SupportBot from './components/SupportBot';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'generator' | 'faq'>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(3,7,18,1))] z-[-1]" />
      
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {activeTab === 'home' && (
          <div className="space-y-24">
            <Hero onGetStarted={() => setActiveTab('generator')} />
            <FAQ />
          </div>
        )}
        
        {activeTab === 'generator' && (
          <Generator />
        )}
        
        {activeTab === 'faq' && (
          <FAQ />
        )}
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default App;
