import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Royal Panjabi Edition",
    description: "Premium cotton silk blend with intricate embroidery",
    price: "4,999",
    oldPrice: "7,000",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=500", // কাপড়ের ডামি ছবি
  },
  {
    id: 2,
    name: "Elite Slim-Fit Shirt",
    description: "Egyptian Giza cotton, wrinkle-free formal wear",
    price: "2,499",
    oldPrice: "3,800",
    discount: "-35%",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=500",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    description: "Heavyweight indigo denim with shearling lining",
    price: "3,999",
    oldPrice: "6,500",
    discount: "-40%",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=500",
  },
  {
    id: 4,
    name: "Modern Casual Wear",
    description: "Comfortable breathable fabric for daily use",
    price: "1,500",
    oldPrice: "2,200",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=500",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#080808] px-[4%] py-20 min-h-screen">

      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="inline-block bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
          Our Collection
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Premium <span className="text-[#d4af37]">Timepieces</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Discover our handpicked selection of luxury apparel, each crafted with precision and elegance.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-[#11151c] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Discount Badge */}
            <div className="absolute top-5 left-5 z-10 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-lg">
              {product.discount}
            </div>

            {/* Product Image Area */}
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl mb-6 bg-[#0a0c12]">
              <Image
                src={product.image}
                alt={product.name}
                fill // ইমেজটিকে কন্টেইনারের সমান করার জন্য
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0c12] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#d4af37] transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl font-bold text-[#d4af37]">
                  ৳{product.price}
                </span>
                <span className="text-sm text-gray-600 line-through">
                  ৳{product.oldPrice}
                </span>
              </div>
            </div>

            {/* Order Button */}
            <Link
              href={`/?productId=${product.id}#order`}
              className="mt-6 w-full flex items-center justify-center bg-[#d4af37] hover:bg-[#b8962f] text-black text-sm font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
            >
              Order Now
            </Link>

          </div>
        ))}
      </div>

    </section>
  );
}