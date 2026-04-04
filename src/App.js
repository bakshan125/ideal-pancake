import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('summary');
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('my_expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('my_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const totalBalance = 500000 - expenses.reduce((sum, item) => sum + item.amount, 0);

  const addExpense = () => {
    const amount = prompt("Enter amount (Rs):");
    const title = prompt("Enter description:");
    if (amount && title) {
      const newExpense = { 
        id: Date.now(), 
        title: title, 
        amount: parseInt(amount), 
        date: new Date().toLocaleDateString() 
      };
      setExpenses([newExpense, ...expenses]);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 font-sans">
      {currentPage === 'summary' ? (
        <div className="max-w-md mx-auto space-y-8">
          <header className="flex justify-between items-center py-4">
            <h1 className="text-xl font-black tracking-tighter text-[#81ecff]">FINANCIAL CURATOR</h1>
            <button onClick={addExpense} className="bg-[#e966ff] w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 text-2xl">
              +
            </button>
          </header>

          <section className="space-y-1">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Total Balance</p>
            <h2 className="text-5xl font-extrabold tracking-tight">Rs. {totalBalance.toLocaleString()}</h2>
          </section>

          <div onClick={() => setCurrentPage('bank')} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex justify-between items-center cursor-pointer active:scale-95 transition-transform">
            <div>
              <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Bank Assets</p>
              <p className="text-2xl font-bold">Rs. 350,000</p>
            </div>
            <div className="text-[#81ecff] text-2xl">🏦</div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Recent Activity</h3>
            {expenses.length === 0 ? (
              <p className="text-gray-700 text-sm italic">No expenses yet. Tap + to add.</p>
            ) : (
              expenses.map(exp => (
                <div key={exp.id} className="bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/5">
                  <div>
                    <p className="font-medium text-sm">{exp.title}</p>
                    <p className="text-[10px] text-gray-500">{exp.date}</p>
                  </div>
                  <span className="text-red-400 font-bold">- Rs. {exp.amount}</span>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        /* Simple Bank View */
        <div className="max-w-md mx-auto space-y-6">
          <button onClick={() => setCurrentPage('summary')} className="text-[#81ecff] text-sm mb-4 flex items-center gap-2">
            ← Back
          </button>
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h2 className="text-gray-400 text-xs font-bold uppercase mb-2">Total Bank Balance</h2>
            <p className="text-4xl font-black mb-8">Rs. 350,000</p>
            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-black/20 rounded-xl"><span>HNB</span><b>Rs. 200,000</b></div>
              <div className="flex justify-between p-4 bg-black/20 rounded-xl"><span>Commercial</span><b>Rs. 150,000</b></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;