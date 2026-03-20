"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  ShoppingCart,
  LogOut,
  ImageIcon,
  Timer,
  Star
} from "lucide-react";
import Logo from '../Shared/Buttons/Logo';

// এই "export default" লেখাটি নিশ্চিত করবে যে layout.js ফাইলটি এটি খুঁজে পাবে
export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { label: "Overview", href: "/dashboard", icon: <LayoutDashboard size={20}/> },
    { label: "Orders", href: "/dashboard/orders", icon: <ShoppingBag size={20}/> },
    { label: "Customers", href: "/dashboard/customers", icon: <Users size={20}/> },
    { label: "Hero Banner", href: "/dashboard/hero-banner", icon: <ImageIcon size={20}/> },
    { label: "Sale Countdown", href: "/dashboard/sale-countdown", icon: <Timer size={20}/> },
    { label: "Featured Products", href: "/dashboard/featured-products", icon: <Star size={20}/> },
  ];

  return (
    <div className="h-full bg-[#11151c] border-r border-white/5 flex flex-col overflow-y-auto">
      
      {/* Logo Section - আপনার দেওয়া কোডটি এখানে ফিক্সড করা হয়েছে */}
      <Logo/>

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