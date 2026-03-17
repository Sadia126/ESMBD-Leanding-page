"use client";

import React, { useState } from 'react';
import { ShieldCheck, Truck, Minus, Plus, CreditCard, ImageIcon, Banknote } from 'lucide-react';

export default function FullWidthOrderForm() {
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(4999);
  const [productImg, setProductImg] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleSubmit = (e) => {
  e.preventDefault();
  alert("অর্ডার সফলভাবে গ্রহণ করা হয়েছে!");
};

  return (
    <section className="w-full min-h-screen bg-[#0a0c12] text-white py-12 px-4 md:px-10 lg:px-20">
      
      {/* Header */}
      <div className="w-full text-center mb-12">
        <span className="border border-[#d4af37] text-[#d4af37] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
          Premium Checkout
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mt-6 mb-4">
          Complete Your <span className="text-[#d4af37]">Purchase</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto italic">
          আপনার পছন্দের ঘড়িটি অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন।
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-[1600px] mx-auto">
        
        {/* Left Side: Product Configuration & Details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-[#11151c] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ImageIcon className="text-[#d4af37] w-5 h-5" /> Product Settings
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Image Link */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Product Image URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/watch.jpg"
                  onChange={(e) => setProductImg(e.target.value)}
                  className="w-full bg-[#1c2128] border border-gray-700 rounded-lg px-4 py-3 focus:border-[#d4af37] outline-none"
                />
              </div>

              {/* Set Price */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Unit Price (৳)</label>
                <input
                  type="number"
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(Number(e.target.value))}
                  className="w-full bg-[#1c2128] border border-gray-700 rounded-lg px-4 py-3 focus:border-[#d4af37] outline-none text-[#d4af37] font-bold"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Preview */}
              <div className="aspect-square w-full max-w-[200px] bg-[#0a0c12] rounded-xl border border-dashed border-gray-700 flex items-center justify-center overflow-hidden">
                {productImg ? (
                  <img src={productImg} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-gray-600 text-xs text-center p-4">Image Preview</div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase text-gray-500">Select Quantity</label>
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"><Minus size={18}/></button>
                  <span className="text-3xl font-bold w-12 text-center">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"><Plus size={18}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-[#11151c] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Delivery Details</h3>
            <div className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full bg-[#1c2128] border border-gray-700 rounded-lg px-4 py-4 focus:border-[#d4af37] outline-none" />
              <input required type="tel" placeholder="Phone Number" className="w-full bg-[#1c2128] border border-gray-700 rounded-lg px-4 py-4 focus:border-[#d4af37] outline-none" />
              <textarea required rows={3} placeholder="Full Address (Area, City, House No)" className="w-full bg-[#1c2128] border border-gray-700 rounded-lg px-4 py-4 focus:border-[#d4af37] outline-none resize-none"></textarea>
            </div>
          </div>
        </div>

        {/* Right Side: Payment & Order Summary */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#11151c] border border-[#d4af37]/30 rounded-2xl p-6 md:p-8 shadow-2xl sticky top-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CreditCard className="text-[#d4af37] w-5 h-5" /> Payment Method
            </h3>

            {/* Payment Options */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {[
                { id: 'cod', label: 'Cash on Delivery', sub: 'পণ্য হাতে পেয়ে টাকা দিন' },
                { id: 'bkash', label: 'bKash Payment', sub: '01XXXXXXXXX (Send Money)' },
                { id: 'nagad', label: 'Nagad Payment', sub: '01XXXXXXXXX (Send Money)' }
              ].map((method) => (
                <label 
                  key={method.id}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === method.id ? 'border-[#d4af37] bg-[#d4af37]/10' : 'border-gray-800 bg-[#0a0c12]'}`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="payment" 
                      value={method.id} 
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#d4af37] w-4 h-4" 
                    />
                    <div>
                      <p className="font-bold text-sm">{method.label}</p>
                      <p className="text-[10px] text-gray-500">{method.sub}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {/* Transaction ID Field (Only shows for bkash/nagad) */}
            {paymentMethod !== 'cod' && (
              <div className="mb-6 animate-in fade-in slide-in-from-top-2">
                <label className="text-xs font-bold uppercase text-[#d4af37] block mb-2">Transaction ID *</label>
                <input
                  required
                  type="text"
                  placeholder="Enter TrxID (e.g. 8N7X6W5Q)"
                  className="w-full bg-[#0a0c12] border border-[#d4af37]/50 rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#d4af37] outline-none text-white font-mono"
                />
              </div>
            )}

            {/* Price Summary */}
            <div className="border-t border-gray-800 pt-6 mt-6 space-y-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>৳{(unitPrice * quantity).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Delivery Fee</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="flex justify-between text-2xl font-bold border-t border-gray-800 pt-4">
                <span>Total</span>
                <span className="text-[#d4af37]">৳{(unitPrice * quantity).toLocaleString()}</span>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#d4af37] hover:bg-[#b8962f] text-black font-black py-5 rounded-xl mt-8 transition-transform active:scale-95 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
              CONFIRM ORDER NOW
            </button>

            {/* Trust Badges Inline */}
            <div className="flex justify-between mt-8 opacity-60 grayscale hover:grayscale-0 transition-all">
               <div className="flex flex-col items-center gap-1 text-[8px] uppercase tracking-tighter">
                  <ShieldCheck size={16} className="text-[#d4af37]"/> Secure
               </div>
               <div className="flex flex-col items-center gap-1 text-[8px] uppercase tracking-tighter">
                  <Truck size={16} className="text-[#d4af37]"/> Fast Delivery
               </div>
               <div className="flex flex-col items-center gap-1 text-[8px] uppercase tracking-tighter">
                  <Banknote size={16} className="text-[#d4af37]"/> Best Price
               </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}