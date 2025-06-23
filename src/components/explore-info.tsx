'use client'
import ExpRating from "../components/explore-rating";
import FloatingButtons from "./floating-buttons";

export default function ExpInfo() {
  return (
    <section className="mt-6 bg-[#faf8f4]">
      {/* Nav Tabs */}
      <div className="overflow-x-auto scrollbar-hide mb-6">
        <div className="grid grid-cols-6 bg-[#F2ECE3] rounded-3xl p-2 sm:p-3 gap-2 h-[52px] sm:h-[62px] min-w-[520px] sm:w-[620px]">
          {[
            { id: "overview", label: "Overview" },
            { id: "location", label: "Location" },
            { id: "requirement", label: "Requirement" },
            { id: "facility", label: "Facility" },
            { id: "pricing", label: "Pricing" },
            { id: "reviews", label: "Reviews" },
          ].map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="w-full h-full flex items-center justify-center text-sm sm:text-base text-center rounded-2xl hover:bg-[#1D2B29] hover:text-white transition-colors"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <div id="overview" className="border-[#E5E7EB] rounded-xl p-3 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold mb-2">About</h2>
          <p className="text-sm leading-relaxed text-[#6C7370]">
            Nearly 1,200 picture-perfect coral islands come together in the Indian Ocean to form the magical Maldives. Located in the <a className="text-[#6C7370] underline" href="#">Baa Atoll UNESCO Biosphere Reserve</a>, <a className="text-[#6C7370] underline" href="#">Four Seasons Resort Maldives at Landaa Giraavaru</a> offers the unique opportunity to snorkel with sea turtles, docile reef sharks, vividly coloured fish and even the occasional dolphin. <br /><br />
            The indescribable experience of snorkelling amid the giant, notoriously rare manta rays and whale sharks is not to be missed. Join a marine biologist from the Resort for an escorted <a className="text-[#6C7370] underline" href="#">snorkelling and manta ray adventure</a>, or hop aboard the <a className="text-[#6C7370] underline" href="#">Four Seasons Explorer</a> for a magical boating foray into the ocean around the Maldives. <span className="text-green-600 font-medium">See More</span>
          </p>
        </div>

        <div id="location" className="border-y border-gray-300 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold mb-2">Location</h2>
          <p className="text-sm mb-3 text-[#6C7370]">Baa, Goidhoo Lagoon, Maladewa</p>
          <button className="inline-flex items-center px-3 py-2 sm:px-4 border border-[#6C7370] text-[#6C7370] rounded-full text-xs sm:text-sm">
            <img src="/explore/pin.png" alt="" className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
            <span className="sm:inline">View on Google Maps</span>
          </button>
        </div>

        <div id="requirement" className="border-gray-300 px-4 sm:px-6">
          <h2 className="text-base sm:text-lg font-bold mb-2">Guest Requirement</h2>
          <ul className="list-disc ml-6 text-sm space-y-1 text-[#6C7370]">
            <li>Guests must be able to snorkel.</li>
            <li>Guests must be 8 years old or older.</li>
            <li>Children under 16 years old must be accompanied by an adult.</li>
          </ul>
        </div>

        <div id="facility" className="border-y border-gray-300 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold mb-2">Facility</h2>
          <ul className="list-disc ml-6 text-sm space-y-1 text-[#6C7370]">
            <li>Light refreshments</li>
            <li>Snorkelling gear</li>
            <li>Towels</li>
            <li>Sunscreen</li>
            <li>Round-trip transportation from our Resort to the snorkelling location</li>
            <li>English-speaking guide and marine biologist</li>
          </ul>
        </div>

        <div id="pricing" className="border-b border-gray-300 px-4 pb-6 sm:px-6">
          <h2 className="text-base sm:text-lg font-bold mb-2">Estimated Price</h2>
          <div className="flex flex-col gap-2 text-sm text-[#6C7370]">
            <div className="flex justify-between w-full max-w-xs">
              <span>Adults (13+)</span>
              <span>IDR 1,787,774 /adult</span>
            </div>
            <div className="flex justify-between w-full max-w-xs">
              <span>Children (8-12)</span>
              <span>IDR 893,887 /child</span>
            </div>
          </div>
        </div>

        <ExpRating />
      </div>
      <FloatingButtons/>
    </section>
  );
}
