import React, { useState } from 'react';
import BankDetails from './components/BankDetails';

function App() {
  // 1. இதுதான் அந்த 'Switch'. ஆரம்பத்துல 'summary' (Home Page) காட்டும்.
  const [currentPage, setCurrentPage] = useState('summary');

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* 2. கண்டிஷன்: currentPage 'summary' ஆ இருந்தா ஹோம் பேஜ் காட்டு */}
      {currentPage === 'summary' ? (
        <div className="p-6 space-y-8">
          <h1 className="text-xl font-bold text-[#81ecff]">FINANCIAL CURATOR</h1>
          
          <div className="space-y-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Total Balance</p>
            <h2 className="text-5xl font-black">Rs. 500,000</h2>
          </div>

          {/* இதோ அந்த பட்டன் - இதைக் கிளிக் பண்ணா 'bank' பேஜுக்கு மாறும் */}
          <div 
            onClick={() => setCurrentPage('bank')} 
            className="cursor-pointer bg-white/5 border border-white/10 p-6 rounded-3xl flex justify-between items-center active:scale-95 transition-all"
          >
            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase">Bank Balance</p>
              <p className="text-2xl font-bold">Rs. 350,000</p>
            </div>
            <span className="material-symbols-outlined text-[#e966ff]">account_balance</span>
          </div>
        </div>
      ) : (
        /* 3. இல்லையென்றால், BankDetails பக்கத்தைக் காட்டு */
        <div className="p-6">
          <BankDetails onBack={() => setCurrentPage('summary')} />
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl flex justify-around items-center">
        <button onClick={() => setCurrentPage('summary')} className={currentPage === 'summary' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">grid_view</span>
        </button>
        <button onClick={() => setCurrentPage('bank')} className={currentPage === 'bank' ? 'text-[#81ecff]' : 'text-gray-500'}>
          <span className="material-symbols-outlined">payments</span>
        </button>
      </nav>
    </div>
  );
}

export default App;