import React from 'react';

const BankDetails = ({ onBack }) => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center text-[#81ecff] gap-2 mb-4"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Summary
      </button>

      <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
        <h2 className="text-[#81ecff] text-xs font-bold uppercase tracking-widest mb-2">Total Bank Balance</h2>
        <p className="text-4xl font-black text-white mb-8">Rs. 350,000</p>
        
        <div className="space-y-4">
          <div className="flex justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
            <span className="text-gray-400">HNB Bank</span>
            <span className="font-bold text-white text-lg">Rs. 200,000</span>
          </div>
          <div className="flex justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
            <span className="text-gray-400">Commercial Bank</span>
            <span className="font-bold text-white text-lg">Rs. 150,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;