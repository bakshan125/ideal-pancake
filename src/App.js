import React, { useState } from 'react';
import BankDetails from './components/BankDetails'; // நீங்கள் உருவாக்கிய அந்தப் புதிய ஃபைல்

function App() {
  const [currentPage, setCurrentPage] = useState('summary');

  // 1. Summary Page (உங்கள் மெயின் டிசைன்)
  const SummaryPage = () => (
    <main className="max-w-5xl mx-auto space-y-8 p-4 md:p-8">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#81ecff] to-[#e966ff]">
            FINANCIAL CURATOR
          </h1>
        </div>
      </header>

      <section className="space-y-2">
        <span className="text-[#81ecff] text-[10px] font-bold tracking-[0.3em] uppercase">Consolidated Overview</span>
        <h2 className="text-gray-400 text-lg font-light">Current Starting Position</h2>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">Rs. 500,000</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex justify-between items-center backdrop-blur-xl">
           <div>
              <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Cash in Hand</p>
              <p className="text-2xl font-bold text-white">Rs. 150,000</p>
           </div>
        </div>
        
        {/* இந்த கார்டை அழுத்தினால் Bank Details பக்கம் வரும் */}
        <div 
          onClick={() => setCurrentPage('bank')} 
          className="cursor-pointer bg-white/5 border border-white/10 p-6 rounded-3xl flex justify-between items-center backdrop-blur-xl hover:bg-white/10 transition-all"
        >
          <div>
            <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Bank Balance</p>
            <p className="text-2xl font-bold text-white">Rs. 350,000</p>
          </div>
          <div className="bg-purple-500/10 p-3 rounded-2xl text-[#e966ff]">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
        </div>
      </div>
    </main>
  );

  // 2. பக்கங்களை மாற்றும் லாஜிக்
  const renderPage = () => {
    switch(currentPage) {
      case 'summary':
        return <SummaryPage />;
      case 'bank':
        return <div className="p-4 md:p-8"><BankDetails onBack={() => setCurrentPage('summary')} /></div>;
      case 'monthly':
        return <div className="p-8 text-center text-gray-500">Monthly Page Coming Soon...</div>;
      case 'settings':
        return <div className="p-8 text-center text-gray-500">Settings Page Coming Soon...</div>;
      default:
        return <SummaryPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#f7f5fd] font-sans pb-28">
      {renderPage()}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#111827]/80 backdrop-blur-2xl border border-white/10 p-3 rounded-[2rem] flex justify-around items-center shadow-2xl">
        <button onClick={() => setCurrentPage('summary')} className={currentPage === 'summary' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">grid_view</span>
        </button>
        <button onClick={() => setCurrentPage('monthly')} className={currentPage === 'monthly' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">calendar_today</span>
        </button>
        <button onClick={() => setCurrentPage('settings')} className={currentPage === 'settings' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;