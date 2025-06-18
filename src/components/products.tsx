import ProductCard from "./product-card";

export default function Products() {
  return (
    <>
      {/* Featured Activities */}
      <section className="mt-20 px-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Activities</h2>
          <a href="#" className="text-base sm:text-lg text-[#0FAE13] hover:underline">
            See all
          </a>
        </div>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            image="/featured-activity/safari.png"
            title="Safari River Cruise"
            location="Rua Santiago"
            review="4.5 (8,005 reviews)"
          />
          <ProductCard
            image="/featured-activity/underwater.png"
            title="Underwater World Experience"
            location="Lisbon - Portugal"
            review="4.7 (9,817 reviews)"
          />
          <ProductCard
            image="/featured-activity/biolumin.png"
            title="Bioluminescence"
            location="Lisbon - Portugal"
            review="4.5 (9,664 reviews)"
          />
          <ProductCard
            image="/featured-activity/snowboard.png"
            title="Snowboarding Adventure"
            location="Istanbul Türkiye"
            review="4.9 (10,851 reviews)"
          />
        </article>
      </section>

      {/* Featured Hotels */}
      <section className="mt-20 px-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Hotels</h2>
          <a href="#" className="text-base sm:text-lg text-[#0FAE13] hover:underline">
            See all
          </a>
        </div>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            image="/featured-hotels/santiago.png"
            title="Santiago De Alfama"
            location="Rua Santiago"
            review="4.8 (7,747 reviews)"
          />
          <ProductCard
            image="/featured-hotels/da-baixa.png"
            title="Hotel Da Baixa"
            location="Lisbon - Portugal"
            review="4.5 (6,744 reviews)"
          />
          <ProductCard
            image="/featured-hotels/convent-square.png"
            title="Convent Square Lisbon"
            location="Lisbon - Portugal"
            review="4.5 (8,005 reviews)"
          />
          <ProductCard
            image="/featured-hotels/romance.png"
            title="Romance Istanbul Hotel"
            location="Istanbul Türkiye"
            review="4.7 (9,817 reviews)"
          />
        </article>
      </section>
    </>
  );
}
