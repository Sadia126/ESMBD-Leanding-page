const testimonials = [
  {
    name: "Rahim Ahmed",
    location: "Dhaka, Bangladesh",
    rating: 5,
    category: "Fashion",
    review: "Amazing quality products and super fast delivery! Got my order in just 3 hours. Will definitely shop again.",
    initials: "RA",
    avatarColor: "bg-pink-500/15 text-pink-400",
  },
  {
    name: "Sumaiya Khan",
    location: "Chittagong, Bangladesh",
    rating: 5,
    category: "Electronics",
    review: "Best online shopping experience in Bangladesh! The prices are unbeatable and customer support is excellent. Highly recommended!",
    initials: "SK",
    avatarColor: "bg-primary-color/15 text-primary-color",
    featured: true,
  },
  {
    name: "Mohammad Hasan",
    location: "Sylhet, Bangladesh",
    rating: 4,
    category: "Grocery",
    review: "I love the variety of products. The grocery section is amazing — fresh items delivered right to my door. 5 stars!",
    initials: "MH",
    avatarColor: "bg-blue-500/15 text-blue-400",
  },
  {
    name: "Nadia Islam",
    location: "Rajshahi, Bangladesh",
    rating: 5,
    category: "Beauty",
    review: "The return process was so easy. I returned a product and got my refund within 3 days. Great service!",
    initials: "NI",
    avatarColor: "bg-purple-500/15 text-purple-400",
  },
  {
    name: "Karim Rahman",
    location: "Khulna, Bangladesh",
    rating: 5,
    category: "Home",
    review: "Packaging was perfect and the product quality exceeded my expectations. Fast delivery to Khulna too!",
    initials: "KR",
    avatarColor: "bg-teal-500/15 text-teal-400",
  },
  {
    name: "Tanvir Ahmed",
    location: "Comilla, Bangladesh",
    rating: 5,
    category: "Sports",
    review: "Ordered sports equipment and it arrived in perfect condition. Great prices compared to local shops. Love it!",
    initials: "TA",
    avatarColor: "bg-orange-500/15 text-orange-400",
  },
];

const stats = [
  { value: "4.9★", label: "Overall Rating" },
  { value: "20K+", label: "Happy Customers" },
  { value: "98%",  label: "Satisfaction Rate" },
  { value: "15K+", label: "Reviews" },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-base ${star <= rating ? "text-primary-color" : "text-gray-700"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#080808] px-[4%] py-16">

      {/* ===== HEADER ===== */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-primary-color/10 border border-primary-color/25 text-primary-color text-sm font-black px-5 py-2 rounded-full uppercase tracking-widest mb-4">
          ★ Customer Reviews
        </span>
        <h2 className="text-4xl font-bold text-white mb-3">
          What Our <span className="text-primary-color">Customers</span> Say
        </h2>
        <p className="text-gray-400 text-base max-w-md mx-auto">
          Trusted by 20,000+ happy shoppers across Bangladesh
        </p>
      </div>

      {/* ===== STATS BAR ===== */}
      <div className="flex flex-wrap justify-center gap-10 bg-white/2 border border-white/7 rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-primary-color">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ===== TESTIMONIAL CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-7 border transition-all hover:-translate-y-1 ${
              t.featured
                ? "bg-gradient-to-br from-primary-color/8 to-primary-color/3 border-primary-color/25"
                : "bg-white/3 border-white/8 hover:border-primary-color/25"
            }`}
          >
            {/* Category Tag */}
            <span className="absolute top-5 right-5 bg-primary-color/10 border border-primary-color/20 text-primary-color text-xs font-bold px-3 py-1 rounded-full">
              {t.category}
            </span>

            {/* Quote */}
            <div className="text-4xl text-primary-color/30 font-serif leading-none mb-3">
              {'"'}
            </div>

            {/* Stars */}
            <StarRating rating={t.rating} />

            {/* Review */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {t.review}
            </p>

            {/* Divider */}
            <div className="h-px bg-white/7 mb-5" />

            {/* Reviewer */}
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${t.avatarColor}`}>
                {t.initials}
              </div>
              <div>
                <p className="text-white text-sm font-bold">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.location}</p>
                <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
                  ✓ Verified Purchase
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}