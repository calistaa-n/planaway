'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    name: "Sylvette Yeo",
    activity: "Snorkeling",
    location: "Nusa Penida, Bali",
    rating: 5,
    review: "Luar biasa! Airnya sangat jernih dan terumbu karangnya masih alami. Kami melihat banyak ikan berwarna-warni dan bahkan penyu. Pemandu sangat ramah dan sabar, terutama saat membantu pemula seperti saya. Peralatan bersih dan lengkap. Waktu terbaik snorkeling ternyata pagi hari karena ombak lebih tenang.",
    helpful: 200,
    image: "/recent-reviews/sylvette.png"
  },
  {
    name: "Bebek Anonim",
    activity: "Old town tour",
    location: "Jakarta",
    rating: 3,
    review: "Aktivitas ini bikin saya merasa 'kembali ke masa lalu'. Pemandu tur sangat informatif, kami belajar banyak soal sejarah Batavia. Kami juga sempat mampir ke museum, naik sepeda ontel, dan mencoba es krim legendaris. Cocok banget buat pecinta sejarah dan keluarga. Tapi, jujur aja, beberapa tempatnya agak kotor dan kurang terawat. Jadi, kalau kamu cari tur yang lebih bersih dan terorganisir, mungkin ini bukan pilihan terbaik.",
    helpful: 499,
    image: "/recent-reviews/bebek.png"  
  },
  {
  name: "Adi Pratama",
  activity: "Hiking at Mount Batur",
  location: "Bali",
  rating: 4,
  review: "Wah, seriusan deh, pemandangan matahari terbitnya itu juara banget! Bikin merinding saking indahnya. Jujur, pas naik lumayan ngos-ngosan dan mikir kapan nyampe, tapi begitu di atas dan lihat langitnya berubah warna pelan-pelan sampai mataharinya nongol, rasanya worth it banget semua perjuangan. Puas banget bisa ngalamin hal sekeren ini. Jadi pengen lagi sih!",
  helpful: 120,
  image: "/recent-reviews/kucing.jpg"
  },
  {
    name: "The Taxman",
    activity: "Snorkeling",
    location: "Nusa Penida, Bali",
    rating: 5,
    review: "Luar biasa! Airnya sangat jernih dan terumbu karangnya masih alami. Kami melihat banyak ikan berwarna-warni dan bahkan penyu. Pemandu sangat ramah dan sabar, terutama saat membantu pemula seperti saya. Peralatan bersih dan lengkap. Waktu terbaik snorkeling ternyata pagi hari karena ombak lebih tenang.",
    helpful: 200,
    image: "/recent-reviews/bebek.png"
  },
] 
  export function RecentReviews() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);
    
  useEffect(() => {
    if (!swiperRef.current) return;

    const navigation = swiperRef.current.params?.navigation;

    if (navigation && typeof navigation === "object") {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="mt-20 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Recent Reviews</h2>
        <a href="#" className="text-green-600 font-medium">See More Reviews</a>
      </div>

      <div className="relative">
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-10 bg-[#6C7370] text-white hover:bg-black rounded-sm flex items-center justify-center shadow"
        >
          <img src="/recent-reviews/arrow-l.png" alt="Arrow" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-10 border-1 bg-[#6C7370] text-white hover:bg-black rounded-sm flex items-center justify-center shadow"
        >
          <img src="/recent-reviews/arrow-r.png" alt="Arrow" />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="px-4 sm:px-12"
        >
          {/* Card Reviews */}
          {reviews.map((r, i) => (
            <SwiperSlide key={i} className="h-[300px]">
              <Card className="bg-[#F2ECE3] h-full px-4 py-5 rounded-3xl flex flex-col w-full">
                <CardContent className="p-0 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mb-2">
                      <img
                        src={r.image}
                        alt={r.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="font-semibold">{r.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {r.activity} | <span className="font-semibold">{r.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4"
                          fill={idx < r.rating ? "#FACC15" : "#E5E7EB"}
                          stroke="none"
                        />
                      ))}
                    </div>

                    <p className="text-sm mb-3 text-muted-foreground line-clamp-3 sm:line-clamp-4">
                      {r.review}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto pt-2">
                    <span>👍 {r.helpful} helpful people</span>
                    <a href="#" className="text-green-600 font-medium">See Full Reviews</a>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))} 
        </Swiper>
      </div>
    </section>
  );
}
