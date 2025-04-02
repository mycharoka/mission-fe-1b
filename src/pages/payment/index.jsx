import { useNavigate } from "react-router";
import { Navbar } from "../../component/navbar";
import useSubscriptionStore from "../../store/subscriptionStore";
import { useState } from "react";
import { Footer } from "../../component/footer";

export default function PaymentPage() {
  const navigate = useNavigate()
  const selectedPackage = useSubscriptionStore(state => state.subscription)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [voucherCode, setVoucherCode] = useState('')
  const adminPrice = 3000

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const totalPrice = () => {
    return (selectedPackage.price + 3000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      <Navbar/>
      <main className="flex-grow p-28 text-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-[32px] font-bold mb-6">Ringkasan Pembayaran</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Plan Selection */}
            <div className="w-full md:w-1/3">
              <div className="bg-gradient-to-b from-blue-700 to-blue-500  rounded-16px overflow-hidden">
                <div className="p-6">
                  <h2 className="inline-block bg-gray-800 px-4 py-2 rounded-[999px] text-lg font-semibold mb-4">{selectedPackage.title}</h2>
                  <p className="text-sm mb-1">Rp {formatPrice(selectedPackage.price)}/bulan</p>
                  <p className="text-sm mb-4">{selectedPackage.accounts}</p>
                  
                  {selectedPackage.features.map((feature, index) => (
                    <div className="space-y-2 mb-2" key={index}>
                      <div className="flex items-start">
                        <span className="mr-2">✔️</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    </div>
                  ))}
                  
                  <button className="bg-white text-blue-700 px-6 py-2 rounded-[999px] font-semibold mb-2 w-full">
                    Langganan
                  </button>
                  <p className="text-[12px] text-center text-white">Syaran & ketentuan berlaku</p>
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
                      {/* VISA ICON */}
                      <img src="/assets/payment-icons/visa.png" alt="visa" />
                      
                      {/* MASTERCARD ICON */}
                      <img src="/assets/payment-icons/MASTERCARD.png" alt="mastercard" />

                      {/* JCB ICON */}
                      <img src="/assets/payment-icons/jcb.png" alt="jcb" />

                      {/* AMEX ICON */}
                      <img src="/assets/payment-icons/american_express.png" alt="amex" />

                    </div>
                    <span className="ml-7 text-[16px]">Kartu Debit/Kredit</span>
                  </div>
                  
                  {/* BCA Virtual Account Option */}
                  <div 
                    className={`border ${paymentMethod === 'bca' ? 'border-gray-400' : 'border-gray-700'} rounded-md p-3 flex items-center cursor-pointer`}
                    onClick={() => setPaymentMethod('bca')}
                  >
                    <div className="w-5 h-5 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                      {paymentMethod === 'bca' && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                    </div>
                    <img src="/assets/payment-icons/bca.png" alt="bca" />
                    <span className="text-[16px] ml-2">BCA Virtual Account</span>
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
                  <button className="ml-2 bg-gray-700 text-white px-4 py-2 rounded-[999px] text-sm">
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
                    <span>Rp {formatPrice(selectedPackage.price)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Biaya Admin</span>
                    <span>Rp {formatPrice(adminPrice)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
                    <span>Total Pembayaran</span>
                    <span>Rp {totalPrice()}</span>
                  </div>
                </div>
              </div>
              
              {/* Pay Button */}
              <div>
                <button className="bg-[#1a4db8] hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-[999px]">
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
    
  );
}