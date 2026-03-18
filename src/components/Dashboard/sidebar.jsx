"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  ShoppingCart,
  LogOut 
} from "lucide-react";

// এই "export default" লেখাটি নিশ্চিত করবে যে layout.js ফাইলটি এটি খুঁজে পাবে
export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { label: "Overview", href: "/dashboard", icon: <LayoutDashboard size={20}/> },
    { label: "Orders", href: "/dashboard/orders", icon: <ShoppingBag size={20}/> },
    { label: "Customers", href: "/dashboard/customers", icon: <Users size={20}/> },
   
  ];

  return (
    <div className="h-full bg-[#11151c] border-r border-white/5 flex flex-col overflow-y-auto">
      
      {/* Logo Section - আপনার দেওয়া কোডটি এখানে ফিক্সড করা হয়েছে */}
      <div className="p-8 mb-4">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Animated Icon Container */}
          <div className="w-10 h-10 bg-linear-to-br from-[#1e232d] to-[#080808] rounded-xl flex items-center justify-center border border-white/10 shadow-xl group-hover:border-[#d4af37]/50 transition-all duration-300 shrink-0">
            <ShoppingCart className="w-5 h-5 text-[#d4af37]" />
          </div>
          
          {/* Text Section */}
          <div className="flex flex-col">
            <div className="text-sm font-black leading-tight tracking-tighter">
              <span className="text-accent-content block">EASY</span>
              <span className="text-[#d4af37] block -mt-1 text-[11px]">SHOPPINGMALL</span>
            </div>
            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mt-1">
              Admin Panel
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-sm font-bold ${
              pathname === item.href 
                ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.icon} <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-6 border-t border-white/5">
        <button className="flex items-center gap-4 px-4 py-3 w-full text-gray-500 hover:text-red-500 transition-colors font-bold text-sm">
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
}