"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const SaleCountDown = () => {
  const targetDate = "2026-03-20T09:47:46.452Z";
  const calculateTimeLeft = () => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlock = (value, label) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#2C2B30] px-6 py-4 rounded-lg shadow-md text-primary-color text-2xl font-mono min-w-[60px]">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs text-[#AAAAAA] mt-1">{label}</div>
    </div>
  );

  return (
    <div className="w-full bg-[#1C1A18] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto rounded-xl">
        <p className="inline-block px-3 py-1 rounded-full text-sm mb-3 bg-[#622c1c] text-[#F8C8A0]">
          🔥 Limited Time Only
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
          Limited Time Offer - Up to 40% Off!
        </h1>
        <p className="mb-8 text-[#B0B0B0] text-lg">
          Don't miss out on this exclusive offer. Hurry, the clock is ticking!
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {timeBlock(timeLeft.days, "DAYS")}
          <span className="text-xl font-bold text-[#AAAAAA] flex items-center">:</span>
          {timeBlock(timeLeft.hours, "HOURS")}
          <span className="text-xl font-bold text-[#AAAAAA] flex items-center">:</span>
          {timeBlock(timeLeft.minutes, "MINUTES")}
          <span className="text-xl font-bold text-[#AAAAAA] flex items-center">:</span>
          {timeBlock(timeLeft.seconds, "SECONDS")}
        </div>

        <Link href="#products" className="inline-block bg-primary-color hover:bg-white text-black font-bold py-3 px-8 rounded shadow-lg transition-colors">
          Claim Your Discount
        </Link>
      </div>
    </div>
  );
};

export default SaleCountDown