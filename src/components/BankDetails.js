import React, { useState } from 'react';
import BankDetails from './components/BankDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('summary');

  // 1. மெயின் பேஜ் (Summary)
  const SummaryPage = () => (
    <main className="max-w-5xl mx-auto space-y-8 p-4 md:p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#81ecff] to-[#e966ff]">
          FINANCIAL CURATOR
        </h1>
      </header>

      <section className="space-y-2">
        <span className="text-[#81ecff] text-[10px] font-bold tracking-[0.3em] uppercase">Overview</span>
        <h1 className="text-5xl font-black text-white">Rs. 500,000</h1>
      </section>

      {/* இந்த கார்டைத் தொட்டால் பக்கம் மாறும் */}
      <div 
        onClick={() => {
          console.log("Card Clicked!"); // இது வேலை செய்கிறதா என்று பார்க்க
          setCurrentPage('bank');
        }} 
        className="cursor-pointer bg-white/5 border border-white/10 p-6 rounded-3xl flex justify-between items-center backdrop-blur-xl"
      >
        <div>
          <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Bank Balance</p>
          <p className="text-2xl font-bold text-white">Rs. 350,000</p>
        </div>
        <div className="bg-purple-500/10 p-3 rounded-2xl text-[#e966ff]">
          <span className="material-symbols-outlined">account_balance</span>
        </div>
      </div>
      
      <p className="text-gray-600 text-xs text-center mt-4">மேலே உள்ள 'Bank Balance' கார்டை கிளிக் செய்யவும்</p>
    </main>
  );

  return (
    <div className="min-h-screen bg-[#030712] text-[#f7f5fd] font-sans pb-28">
      
      {/* பக்கம் மாறும் லாஜிக் */}
      {currentPage === 'summary' ? (
        <SummaryPage />
      ) : (
        <div className="p-4 md:p-8">
          <BankDetails onBack={() => setCurrentPage('summary')} />
        </div>
      )}

      {/* Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#111827]/80 backdrop-blur-2xl border border-white/10 p-3 rounded-[2rem] flex justify-around items-center">
        <button onClick={() => setCurrentPage('summary')} className={currentPage === 'summary' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">grid_view</span>
        </button>
        <button onClick={() => setCurrentPage('bank')} className={currentPage === 'bank' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">calendar_today</span>
        </button>
      </nav>
    </div>
  );
}

export default App;