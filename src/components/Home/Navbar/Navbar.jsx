import Link from "next/link";
import { ShoppingCart, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/85 backdrop-blur-2xl border-b border-white/8 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between px-[4%] py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-11 h-11 bg-linear-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg shadow-black/50">
            <ShoppingCart className="w-5 h-5 text-primary-color" />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold leading-tight">
              <span className="text-white">EASY</span>
              <span className="text-primary-color">SHOPPINGMALL</span>
            </div>
            <div className="text-[11px] text-gray-500">Best deals every day</div>
          </div>
        </Link>

        {/* Dashboard Button */}
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-color border border-primary-color text-accent text-sm font-semibold hover:bg-base-700 transition-all"
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>

      </div>
    </nav>
  );
}