import Sidebar from "../../src/components/Dashboard/sidebar.jsx";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#080808]">
      {/* বাম পাশে ফিক্সড সাইডবার */}
      <aside className="fixed inset-y-0 left-0 w-64 hidden md:block z-50">
        <Sidebar/>
      </aside>

      {/* ডান পাশে মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 md:pl-64">
        {/* এখানে আপনি চাইলে একটি ছোট ড্যাশবোর্ড নেভবার দিতে পারেন */}
        <header className="h-16 border-b border-white/5 flex items-center px-8 text-gray-400">
           Admin / Dashboard
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}