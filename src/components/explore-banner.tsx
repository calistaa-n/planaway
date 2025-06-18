import { Star, BadgeCheck, Share, Pencil, Heart } from "lucide-react";

export function ExpBanner() {
  return (
    <section className="mt-12 bg-[#faf8f4] min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-[#6C7370] mb-6 sm:mb-9">
        Home &gt; Explore Activity &gt; Nature & Adventure &gt;
        <span className="text-black">Snorkeling</span>
      </nav>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        Snorkeling in Maldives
      </h1>

      {/* Rating, Badge & Actions */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Star size={18} className="text-yellow-500 fill-yellow-500" />
          <span className="font-medium text-gray-800">4.9</span>
          <span className="hidden sm:inline text-[#6C7370]">
            (10,851 reviews)
          </span>
        </div>

        <div className="flex items-center text-[#6C7370] text-sm sm:text-base">
          <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 fill-[#0FAE13] text-white" />
          <span className="ml-2">Recommended by 89% Traveler</span>
        </div>

        <div className="flex items-center gap-2 ml-auto w-full sm:w-auto justify-end">
          <Share className="w-5 h-5 text-[#6C7370] cursor-pointer hover:text-black" />
          <button className="flex items-center gap-1 text-white bg-[#6C7370] hover:bg-black rounded-full py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
            <Pencil className="w-4 h-4" />
            Add Review
          </button>
          <button className="flex items-center gap-1 text-white bg-[#6C7370] hover:bg-black rounded-full py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
            <Heart className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {/* Main image */}
        <div className="md:col-span-3">
          <img
            src="/explore/people_diving.png"
            alt="Main snorkeling"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        {/* Sub images */}
        <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-2 mt-2 md:mt-0">
          <img
            src="/explore/turtle.png"
            alt="Turtle"
            className="rounded-2xl w-full h-full object-cover"
          />
          <img
            src="/explore/boat.png"
            alt="Swimmer"
            className="rounded-2xl w-full h-full object-cover"
          />
          <img
            src="/explore/corals.png"
            alt="Coral reef"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="relative border-2 rounded-2xl overflow-hidden">
            <img
              src="/explore/palms.png"
              alt="Palm beach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
