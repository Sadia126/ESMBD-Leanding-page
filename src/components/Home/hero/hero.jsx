import Link from "next/link";
import Image from "next/image"; // Image component add করা হয়েছে
import { ShoppingBag, Truck, Shield, RotateCcw, Tag, ArrowRight, Zap } from "lucide-react";
import StatsCounter from "../statsCount/statsCounter";

const features = [
  { icon: Truck,     title: "Free Delivery",   sub: "Orders over ৳500" },
  { icon: Shield,    title: "Secure Payment",  sub: "100% protected" },
  { icon: RotateCcw, title: "Easy Returns",    sub: "30 day policy" },
  { icon: Tag,       title: "Best Deals",      sub: "Lowest prices" },
];

const categories = [
  { label: "Fashion", emoji: "👗" },
  { label: "Tech", emoji: "📱" },
  { label: "Home", emoji: "🏠" },
  { label: "Beauty", emoji: "💄" },
  { label: "Toys", emoji: "🧸" },
];

const stats = [
  { target: 50000, suffix: "K+", divisor: 1000, label: "Products" },
  { target: 20000, suffix: "K+", divisor: 1000, label: "Customers" },
  { target: 4.9,   suffix: "★",  divisor: 1,    label: "Rating",      decimal: 1 },
  { target: 99,    suffix: "%",  divisor: 1,    label: "Satisfaction" },
];

export default function Hero() {
  return (
    <section className="bg-[#080808] relative overflow-hidden font-sans">
      
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-color/10 blur-[140px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-[-10%] -left-20 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px]" />

      <div className="relative z-10 px-[6%] pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col gap-8">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-color/20 to-transparent border-l-2 border-primary-color text-primary-color text-[12px] font-bold px-4 py-2 uppercase tracking-[0.2em]">
              <Zap className="w-3.5 h-3.5 fill-current" />
              Mega Sale is Live Now
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-orange-400">Smarter</span>,<br /> 
              Save Big.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-[480px]">
              Experience the future of online shopping. Premium products, wholesale prices, and lightning-fast delivery at your doorstep.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="group flex items-center gap-3 bg-primary-color hover:bg-white text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1"
            >
              <ShoppingBag className="w-5 h-5" />
              Start Shopping
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/sale"
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-4 rounded-2xl transition-all font-bold backdrop-blur-sm"
            >
              Exclusive Deals
            </Link>
          </div>

          <StatsCounter stats={stats} />
        </div>

        {/* --- RIGHT VISUAL CARD --- */}
        <div className="relative group">
          {/* Animated Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-color to-secondary rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0f0f0f] border border-white/10 rounded-[2rem] p-4 overflow-hidden shadow-2xl">
            
            {/* Top Image Section */}
            <div className="relative h-[400px] w-full rounded-[1.5rem] overflow-hidden">
                {/* Replace this URL with your actual product/hero image */}
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" 
                alt="New Arrivals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
              
              {/* Floating Badges */}
              <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                <span className="bg-primary-color text-black text-[12px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce">
                  UP TO 70% OFF
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20">
                  Limited Edition
                </span>
              </div>
            </div>

            {/* Card Content Overlay */}
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <h3 className="text-white font-bold text-xl mb-2">Curated Collections</h3>
                <p className="text-gray-400 text-sm mb-5 leading-snug">Explore hand-picked items tailored for your lifestyle.</p>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span
                      key={cat.label}
                      className="bg-white/10 border border-white/5 text-gray-200 text-[11px] px-3 py-1.5 rounded-lg hover:bg-primary-color hover:text-black transition-colors cursor-pointer font-medium"
                    >
                      {cat.emoji} {cat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Small Decorative Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl hidden md:flex items-center gap-4 animate-float border-4 border-[#080808]">
             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600 fill-current" />
             </div>
             <div>
                <p className="text-black text-xs font-black uppercase leading-none">Fast Delivery</p>
                <p className="text-gray-500 text-[10px]">Within 24 Hours</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <div className="relative z-10 px-[6%] py-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 border-t border-white/5">
        {features.map((f, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-primary-color/50 group-hover:bg-primary-color/10 transition-all">
              <f.icon className="w-6 h-6 text-primary-color" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-white text-[15px] font-bold">{f.title}</p>
              <p className="text-gray-500 text-xs mt-1">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}