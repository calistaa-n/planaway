import { Search } from 'lucide-react';
import CategoryCard from './category-card.tsx';

export default function HomeCategory() {
  return (
    <section className="mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-extralight">
          Find the <b className="font-bold">perfect vacation activity</b> to make your trip <b className="font-bold">unforgettable</b>.
        </h1>
      </div>

      {/* Search bar & button */}
      <div className="mt-10 mb-14 flex flex-col gap-4 items-stretch sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <div className="relative w-full sm:max-w-xl text-[#6C7370]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Find a destination or activity"
            className="pl-12 py-3 bg-white rounded-4xl w-full focus:outline-none focus:ring-2 focus:ring-[#0FAE13] placeholder:text-[#6C7370]"
          />
        </div>
        <button className="py-3 px-6 bg-[#0FAE13] text-white rounded-4xl w-full sm:w-auto">
          Search
        </button>
      </div>

      {/* Category cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        <CategoryCard
          image="/category/nature.png"
          title="Nature and Adventure"
          description="Perfect for those who want to escape their routine"
        />
        <CategoryCard
          image="/category/relaxation.png"
          title="Relaxation"
          description="Perfect for those who want to de-stress or seek tranquility."
        />
        <CategoryCard
          image="/category/culture.png"
          title="Culture and History"
          description="Perfect for those of you who want to experience the culture and traditions of the place you're visiting."
        />
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center items-stretch gap-6">
          <CategoryCard
            image="/category/culinary.png"
            title="Culinary"
            description="A traveler who likes to explore cities through food. Influencer or content creator who wants interesting content"
          />
          <CategoryCard
            image="/category/entertainment.png"
            title="Entertainment and Family"
            description="To strengthen the relationship with your partner, family or friends."
          />
        </div>
      </div>
    </section>
  );
}
