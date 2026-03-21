"use client";

import React from 'react';
import {  
  DollarSign, 
  Clock, 
  CheckCircle2, 
  ShoppingCart 
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  
  // ড্যাশবোর্ডের কার্ডগুলোর ডাটা
  const stats = [
    { id: 1, name: 'Total Revenue', value: '৳125,400', icon: <DollarSign size={24}/>, color: 'text-green-500' },
    { id: 2, name: 'Pending Orders', value: '12', icon: <Clock size={24}/>, color: 'text-yellow-500' },
    { id: 3, name: 'Completed Orders', value: '45', icon: <CheckCircle2 size={24}/>, color: 'text-blue-500' },
    { id: 4, name: 'Total Products', value: '08', icon: <ShoppingCart size={24}/>, color: 'text-[#d4af37]' },
  ];

  // রিসেন্ট অর্ডার টেবিলের ডাটা
  const recentOrders = [
    { id: "ORD001", customer: "Ariful Islam", phone: "017XXXXXXXX", total: "৳4,999", method: "bKash", trxId: "8N7X6W5Q", status: "Pending" },
    { id: "ORD002", customer: "Samiul Haque", phone: "018XXXXXXXX", total: "৳2,499", method: "Cash on Delivery", trxId: "-", status: "Delivered" },
    { id: "ORD003", customer: "Rakibul Redoy", phone: "019XXXXXXXX", total: "৳3,999", method: "Nagad", trxId: "9M2Z1K0L", status: "Pending" },
  ];

  return (
    <div className="flex-1 w-full p-4 md:p-8 lg:p-10">
      
      {/* Header Section */}
      <div className="mb-10">
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Admin / Dashboard</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">
          Welcome to your <span className="text-[#d4af37]">Dashboard</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm">আপনার সব অর্ডার এবং দোকানের আপডেট এখানে দেখতে পারবেন।</p>
      </div>

      {/* 1. Stats Grid - Full Width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {stats.map((item) => (
          <div key={item.id} className="bg-[#11151c] p-7 rounded-2xl border border-white/5 shadow-xl hover:border-[#d4af37]/30 transition-all group">
            <div className={`mb-5 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform ${item.color}`}>
              {item.icon}
            </div>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">{item.name}</p>
            <h3 className="text-3xl font-bold mt-2 text-white">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* 2. Recent Orders Table Section */}
      <div className="bg-[#11151c] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#0d1016]">
          <h3 className="font-bold text-xl text-white">Recent Orders</h3>
          <Link href={`/dashboard/orders`} className="text-[#d4af37] text-xs font-bold hover:underline tracking-widest uppercase">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0a0c12] text-gray-500 text-[10px] uppercase font-bold tracking-widest border-b border-white/5">
              <tr>
                <th className="px-8 py-5">Order ID</th>
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Total</th>
                <th className="px-8 py-5">Payment</th>
                <th className="px-8 py-5">TrxID</th>
                <th className="px-8 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-white/02 transition-colors group">
                  <td className="px-8 py-5 text-sm font-mono text-gray-400 group-hover:text-white">{order.id}</td>
                  <td className="px-8 py-5">
                    <div className="text-sm font-bold text-white">{order.customer}</div>
                    <div className="text-[10px] text-gray-500">{order.phone}</div>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-[#d4af37]">{order.total}</td>
                  <td className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase">{order.method}</td>
                  <td className="px-8 py-5 text-xs font-mono text-blue-400">{order.trxId}</td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                      order.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}