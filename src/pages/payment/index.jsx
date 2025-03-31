import { useNavigate } from "react-router";
import { Navbar } from "../../component/navbar";
import useSubscriptionStore from "../../store/subscriptionStore";
import { useState } from "react";

export default function PaymentPage() {
  const navigate = useNavigate()
  const selectedPackage = useSubscriptionStore(state => state.subscription)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [voucherCode, setVoucherCode] = useState('')

  // const paymentMethods = [
  //   {id: 'credit-card', name: 'Kartu Kredit/Debit'},
  //   {id: 'bank-transfer', name: 'Transfer Bank'},
  //   {id: 'e-wallet', name: 'E-Wallet'},
  //   {id: 'qris', name: 'QRIS'},
  // ]

  return (
    <main className="flex-grow py-8 px-6 text-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold mb-6">Ringkasan Pembayaran</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Plan Selection */}
            <div className="w-full md:w-1/3">
              <div className="bg-[#1a4db8] rounded-16px overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Individual</h2>
                  <p className="text-sm mb-1">Mulai dari Rp49.990/bulan</p>
                  <p className="text-sm mb-4">1 Akun</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-white mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Tidak ada iklan</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-white mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Kualitas 720p</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-white mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Download konten pilihan</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white text-[#1a4db8] font-semibold py-2 rounded-md mb-2">
                    Langganan
                  </button>
                  <p className="text-xs text-center text-blue-200">Syarat dan Ketentuan Berlaku</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Payment Details */}
            <div className="w-full md:w-2/3">
              <div className="mb-6">
                <h2 className="text-lg mb-3">Metode Pembayaran</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Credit/Debit Card Option */}
                  <div 
                    className={`border ${paymentMethod === 'card' ? 'border-gray-400' : 'border-gray-700'} rounded-md p-3 flex items-center cursor-pointer`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="w-5 h-5 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                      {paymentMethod === 'card' && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-5 w-8 bg-[#1a1f71] rounded-sm flex items-center justify-center text-white text-xs font-bold">VISA</div>
                      <div className="h-5 w-8 flex items-center justify-center">
                        <div className="w-5 h-5 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center ml-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-80"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-5 w-8 bg-white rounded-sm flex items-center justify-center">
                        <div className="text-[#0066b2] text-xs font-bold">JCB</div>
                      </div>
                      <div className="h-5 w-8 bg-[#016fd0] rounded-sm flex items-center justify-center text-white text-xs font-bold">
                        AMEX
                      </div>
                    </div>
                    <span className="ml-2 text-sm">Kartu Debit/Kredit</span>
                  </div>
                  
                  {/* BCA Virtual Account Option */}
                  <div 
                    className={`border ${paymentMethod === 'bca' ? 'border-gray-400' : 'border-gray-700'} rounded-md p-3 flex items-center cursor-pointer`}
                    onClick={() => setPaymentMethod('bca')}
                  >
                    <div className="w-5 h-5 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                      {paymentMethod === 'bca' && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                    </div>
                    <div className="h-5 w-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                      BCA
                    </div>
                    <span className="text-sm">BCA Virtual Account</span>
                  </div>
                </div>
              </div>
              
              {/* Voucher Code */}
              <div className="mb-6">
                <h2 className="text-lg mb-3">Kode Voucher (Jika ada)</h2>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-grow bg-transparent border border-gray-700 rounded-md p-3 text-sm"
                    placeholder="Masukkan kode voucher"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                  />
                  <button className="ml-2 bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
                    Gunakan
                  </button>
                </div>
              </div>
              
              {/* Transaction Summary */}
              <div className="mb-6">
                <h2 className="text-lg mb-3">Ringkasan Transaksi</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Paket Premium Individual</span>
                    <span>Rp49.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Biaya Admin</span>
                    <span>Rp3.000</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
                    <span>Total Pembayaran</span>
                    <span>Rp52.000</span>
                  </div>
                </div>
              </div>
              
              {/* Pay Button */}
              <div>
                <button className="bg-[#1a4db8] hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-md">
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}