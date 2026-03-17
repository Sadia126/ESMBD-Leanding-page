"use client";

import React, { useState } from 'react';
import { Search, Filter, Eye, Trash2, Download, MoreVertical } from 'lucide-react';

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    { id: "ORD-7281", customer: "Ariful Islam", date: "16 Mar 2026", total: "৳4,999", status: "Pending", payment: "bKash" },
    { id: "ORD-7282", customer: "Samiul Haque", date: "15 Mar 2026", total: "৳2,499", status: "Delivered", payment: "COD" },
    { id: "ORD-7283", customer: "Rakibul Redoy", date: "15 Mar 2026", total: "৳3,999", status: "Processing", payment: "Nagad" },
    { id: "ORD-7284", customer: "Jasim Uddin", date: "14 Mar 2026", total: "৳1,200", status: "Cancelled", payment: "bKash" },
    { id: "ORD-7285", customer: "Anika Tabassum", date: "14 Mar 2026", total: "৳8,500", status: "Delivered", payment: "Bank" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white font-serif">
            Order <span className="text-[#d4af37]">Management</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">সব কাস্টমারের অর্ডার ডিটেইলস এবং স্ট্যাটাস এখান থেকে কন্ট্রোল করুন।</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-black px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-all">
          <Download size={18} /> Export Orders
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text"
            placeholder="Search by Order ID or Customer name..."
            className="w-full bg-[#11151c] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#d4af37]/50 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-[#11151c] border border-white/5 px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-[#11151c] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0a0c12] text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white/5">
              <tr>
                <th className="px-8 py-6">Order ID</th>
                <th className="px-8 py-6">Customer</th>
                <th className="px-8 py-6">Date</th>
                <th className="px-8 py-6">Amount</th>
                <th className="px-8 py-6">Payment</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5 text-sm font-mono text-[#d4af37]">{order.id}</td>
                  <td className="px-8 py-5 text-sm font-bold text-white">{order.customer}</td>
                  <td className="px-8 py-5 text-sm text-gray-400">{order.date}</td>
                  <td className="px-8 py-5 text-sm font-bold text-white">{order.total}</td>
                  <td className="px-8 py-5 text-[10px] font-bold text-gray-500 uppercase">{order.payment}</td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button title="View Details" className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-500 transition-all">
                        <Eye size={16} />
                      </button>
                      <button title="Delete Order" className="p-2 bg-white/5 rounded-lg hover:bg-red-500/20 hover:text-red-500 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-6 bg-[#0a0c12]/50 border-t border-white/5 flex justify-between items-center">
          <p className="text-xs text-gray-500 font-medium tracking-widest">Showing 5 of 120 Orders</p>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-[#11151c] border border-white/5 rounded-lg text-xs disabled:opacity-50" disabled>Prev</button>
            <button className="px-4 py-1.5 bg-[#d4af37] text-black font-bold rounded-lg text-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Status কালার ফাংশন
function getStatusStyle(status) {
  switch (status) {
    case 'Delivered': return 'bg-green-500/10 text-green-500';
    case 'Pending': return 'bg-yellow-500/10 text-yellow-500';
    case 'Processing': return 'bg-blue-500/10 text-blue-500';
    case 'Cancelled': return 'bg-red-500/10 text-red-500';
    default: return 'bg-gray-500/10 text-gray-500';
  }
}