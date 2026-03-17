"use client";

import React, { useState } from 'react';
import { Search, Mail, Phone, MapPin, UserPlus, MoreVertical, Trash2 } from 'lucide-react';

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    { id: "CUS-101", name: "Ariful Islam", email: "arif@example.com", phone: "01712345678", location: "Dhaka", totalOrders: 5, spent: "৳25,400" },
    { id: "CUS-102", name: "Samiul Haque", email: "samiul@gmail.com", phone: "01887654321", location: "Chittagong", totalOrders: 2, spent: "৳4,999" },
    { id: "CUS-103", name: "Anika Tabassum", email: "anika.t@outlook.com", phone: "01911223344", location: "Sylhet", totalOrders: 12, spent: "৳85,000" },
    { id: "CUS-104", name: "Rakibul Redoy", email: "rakib@example.com", phone: "01500998877", location: "Rajshahi", totalOrders: 1, spent: "৳1,200" },
    { id: "CUS-105", name: "Jasim Uddin", email: "jasim@shop.com", phone: "01344556677", location: "Khulna", totalOrders: 8, spent: "৳42,300" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white font-serif">
            Customer <span className="text-[#d4af37]">Directory</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">আপনার রেজিস্ট্রিকৃত কাস্টমারদের তালিকা এবং তাদের কেনাকাটার ইতিহাস।</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-black px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-all">
          <UserPlus size={18} /> Add New Customer
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-1/2">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        <input 
          type="text"
          placeholder="Search by name, email or phone..."
          className="w-full bg-[#11151c] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#d4af37]/50 outline-none transition-all text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Customers Table */}
      <div className="bg-[#11151c] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0a0c12] text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white/5">
              <tr>
                <th className="px-8 py-6">Customer Info</th>
                <th className="px-8 py-6">Contact</th>
                <th className="px-8 py-6">Location</th>
                <th className="px-8 py-6 text-center">Orders</th>
                <th className="px-8 py-6">Total Spent</th>
                <th className="px-8 py-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-transparent flex items-center justify-center text-[#d4af37] font-bold border border-[#d4af37]/20">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{customer.name}</div>
                        <div className="text-[10px] text-gray-500 font-mono">{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Mail size={12} className="text-[#d4af37]" /> {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Phone size={12} className="text-[#d4af37]" /> {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin size={14} /> {customer.location}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className="bg-white/5 px-3 py-1 rounded-lg text-xs font-bold text-white">
                      {customer.totalOrders}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-[#d4af37]">
                    {customer.spent}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                      <Trash2 size={18} />
                    </button>
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