import React, { useState } from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import FileComplaint from './components/FileComplaint';
import TrackComplaint from './components/TrackComplaint';
import HowItWorks from './components/HowItWorks';
import About from './components/About';

type Page = 'home' | 'file-complaint' | 'track-complaint' | 'how-it-works' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'file-complaint':
        return <FileComplaint onNavigate={setCurrentPage} />;
      case 'track-complaint':
        return <TrackComplaint onNavigate={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;